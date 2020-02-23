import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: "Alex", 
      contador : 0,
      horario: "00:00:00"
    }
  }




  componentDidMount(){
    setInterval(() => {
        this.setState({horario : new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){
    console.log("Atualizou")
  }

    
  
  aumentar(){
    this.setState({contador : this.state.contador + 1})
  }


  diminuir(){
    this.setState({contador : this.state.contador - 1})
  }


  render() {
    return (
      <div>
         <span>Contador</span>
        <div>
          <div>Horário => {this.state.horario} </div>
          <button onClick={ (event) => this.diminuir()}>-</button>
          {this.state.contador} 
          <button onClick={ (event) => this.aumentar()}>+</button>
        </div>
      </div>
    )
  }
}

export default App;

