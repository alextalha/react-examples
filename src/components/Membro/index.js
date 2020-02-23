import React, { Component } from 'react'

class Membro extends Component {

    constructor(props){ 
        super(props)
        this.state = {
            status:false,
         
        }
    }

    entrar(){
        this.setState({ status : true})
    }

    sair(){
        this.setState({ status : false})
    }




    render() {
        return (
            <div>
                {this.state.status == 0 ?
                <> 
                    <h1>Ola Visitante</h1>
                    <button onClick={ () => this.entrar() }>Entrar</button>
                 </>
                 :
                 <> 
                    <h1>Ola Alex</h1>
                    <button onClick={ () => this.sair() }>Sair</button>
                 </>

                }    
            </div>
            
        )
    }
}


export default Membro;