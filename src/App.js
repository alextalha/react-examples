import React, {Component} from 'react'

import '../src/estilo.css'

class App extends Component{

  //http://sujeitoprogramador.com/rn-api/?api=posts
  

  constructor(props){
    super(props)
    this.state = {
      nutri : []
    }
  }

  componentDidMount(){

    let url = "http://sujeitoprogramador.com/rn-api/?api=posts"
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
      })
  }

  render(){

    return (
      
      <div className="container">
        <header>
            <strong>React Nutri</strong>
        </header>
        { this.state.nutri.map( (item) =>{
          return(
            <article className="post" key={item.id}>
              <strong className="titulo"> {item.titulo}</strong>
              <img className="capa" src={item.capa} />
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="botao" href="#">Acessar</a>
            </article>
          )
        })}
    
      </div>
      
    )

  }
}



export default App;