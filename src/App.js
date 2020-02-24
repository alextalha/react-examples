import React, {Component} from 'react'

import '../src/estilo.css'

class App extends Component{

  constructor(){
    super()
      this.state = { 
        frase :  ""
    }

     this.frases =  ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
     'O riso é a menor distância entre duas pessoas.', 
     'Deixe de lado as preocupações e seja feliz.',
     'Realize o óbvio, pense no improvável e conquiste o impossível.',
     'Acredite em milagres, mas não dependa deles.',
     'A maior barreira para o sucesso é o medo do fracasso.'];

     this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }


  quebraBiscoito(){

    let frase = this.frases[Math.floor( Math.random() * this.frases.length)]
    this.setState( { frase })

  }


  render(){

    return (
      
      <div className="container">
        <img className="img"  src={require("../src/assets/biscoito.png")} />
        <Botao acaoBtn={this.quebraBiscoito} nome="Abrir Biscoito" />
        <h3 className="textoFrases">{this.state.frase}</h3>
      </div>
      

    )

  }
}


class Botao extends Component{




  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}






export default App;