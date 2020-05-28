//esto nos sirve para copiar en nuestro archivo que distribucion el html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//nos ayuda a entender las variables de entorno
const Dotenv = require('dotenv-webpack');
const htmlPlugin = new HtmlWebpackPlugin({
  //estamos diciendo donde esta el archivo html para copiar
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [
      {
        //en esta parte estamos haciendo una regla para que todos los archivos
        //que terminan en js van a ser procesados o entendidos con bable-loader
        //bable tiene su configuracion ".babelrc"
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  //complementos
  plugins: [htmlPlugin, new Dotenv()]
};
