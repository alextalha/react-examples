import React, { Component } from 'react'

class Membro extends Component {

    constructor(props){ 
        super(props)
        this.state = {
            nome: props.nome
        }
    }

    render() {
        return (
            <div>
               <h2> Bem Vindo(a){this.state.nome} </h2>
               <h2>Logar como Alex  <button onClick={ (event) => this.setState({ nome : "Alex"})}> logar </button></h2>
               <button onClick={ (event) => this.setState({ nome : "Visitante"})}>Sair</button>
            </div>
        )
    }
}


export default Membro;