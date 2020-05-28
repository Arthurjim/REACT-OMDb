import React from 'react';
import ReactDom from 'react-dom';
import List from './containers/List';
import 'bootswatch/dist/lux/bootstrap.min.css';

const App = () => {
  return(
    <>
    <nav className="navbar navbar-dark bg-dark border-bottom border-white">
      <a href="/" className="navbar-brand">
        Arthur-Movies
      </a>
    </nav>
    <main className="bg-dark">
        <div className="container">
           <List />
        </div>
    </main>
    </>
     
  )
}
ReactDom.render(<App/>, document.getElementById('root'));

