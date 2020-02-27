import React, { Component } from 'react'

import './filme.css'
 class Filme extends Component {


    constructor(props){
        super(props)
        this.state = {
    
            filme : []
        }
    
        this.loadFilme = this.loadFilme.bind(this)
    }

    componentDidMount(){
        this.loadFilme();

    }
    
    loadFilme(){

        const { id } = this.props.match.params
        let url = `http://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
      fetch(url)
       .then((r) => r.json())
       .then( (json) => {
            this.setState({ filme : json})
       })     
    }


    render() {
        return (
            <div>
                <div className="filme-info">
                   
                <article key={this.state.filme.id}>
                            <h1>{this.state.filme.nome}</h1>
                            <img src={this.state.filme.foto}  alt={this.state.filme.nome}/> 
                            {this.state.filme.length !== 0 &&
                            <h3>Sinopse</h3>
                            }
                             <p>{this.state.filme.sinopse}</p>
                         
                </article>      
                </div>
            </div>
        )
    }
}

export default Filme
