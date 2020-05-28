import React from 'react';
import Card from '../components/Card/Card';

console.log(process.env.API)
const API = process.env.API;

class List extends React.Component {
  //este metodo se ejecuta apenas la clase sea instanciada
  constructor() {
    super();
    //se definle el estado,
    this.state = {
      data: [],
      searchTerm: '',
      error: '',
      loading: true
    }
  }
  //Para solicitar los datos se utiliza  componentDidMount
  async componentDidMount() {
    //const res = await fetch('../../assets/data.json')
    const res = await fetch(`${API}&s=batman`)
    const resJSON = await res.json()
    console.log(resJSON); 
    //estamos diciendo lo que contiene el estado
    this.setState({ data: resJSON.Search, loading: false })

  }
  async handleSubmit(e) {    
    e.preventDefault();
    if(!this.state.searchTerm){
      return this.setState({error: 'Please write a valid text'})
    }
    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json();
    

    if (!data.Search) {
      return this.setState({error: 'There are no results'});
    }
    this.setState({data: data.Search, error:'', searchTerm: ''})
  }
  render() {
     
    const{ data, loading } = this.state;
    if(loading){
      return <h3 className="text-light">Loading...</h3>
    }

    return (
      <>
        <div className="row ">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>{/*Estamos diciendo que cuando se ejecute el onSubmit  se ejecutara el handleSubmit*/ }
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search"  
                onChange={e => this.setState({searchTerm: e.target.value  })} //escucha los cambios   
                value={this.state.searchTerm}
                autoFocus
              />
            </form>
            <p className="text-white ">
              {this.state.error ? this.state.error : ''}
            </p>
          </div>
        </div>
        <div className="row">
          {
            data.map((movie, i) => {
              return <Card movie={movie} key={i}  />
            })
          }
        </div>
      </>
    )

  }
}

export default List;