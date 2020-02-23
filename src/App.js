import React, {Component} from 'react';


class Equipe extends Component{
  
  render(){
    return (
      <div>
        <hr/>
       <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
      </div>
    )
  }
}
class Sobre extends Component{
  
  render(){
    return (
      <div>
        <span>Olá meu nome é {this.props.nome}</span> <br />
        <span>Olá meu cargo é {this.props.cargo}</span><br />
        <span>Olá minha idade é {this.props.idade}</span>
      </div>
    )
  }
}

function App(props) {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Alex" cargo="Analista de Sistemas" idade="36"/>
      <Equipe nome="Aline" cargo="Jornalista" idade="37"/>
    </div>
  )
  
}

export default App;
