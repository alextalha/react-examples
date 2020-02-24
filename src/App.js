import React, {Component} from 'react'



class App extends Component{

  constructor(){
    super()
      this.state = {
        nome : "",
        email : "",
        senha : "",
        error : []
      
    }
  }
 


  validar(event){

    event.preventDefault();
    //console.log("state",this.state)

     this.setState({ error : [] })
     let valores = []


    if(this.state.nome == ""){
      valores.push(["Nome Vazio"])
      this.setState({ error : valores})
       

    }
    if(this.state.email == ""){
      valores.push(["Email Vazio"])
      this.setState({ error : valores})
    }

    if(this.state.senha == ""){
      valores.push(["Senha Vazia"])
      this.setState({ error : valores})
    }

    console.log(this.state.error.length)
  }


  render(){

    return (

      <div>
          <h2>Cadastro Usuário</h2>
        <form onSubmit={ (event) => this.validar(event)}>
          {this.state.error.length != 0 &&
          <p>{ this.state.error.map( (erro) => {
                return <div>{erro}</div>
           } )}</p>
          }
          <label for="nome">Nome : </label>
          <input type="text" name="nome" value={this.state.nome} onChange={ (e) => this.setState({ nome : e.target.value}) }  ></input><br />
          <label for="email ">Email : </label>
          <input type="email" name="email" value={this.state.email} onChange={ (e) => this.setState({ email : e.target.value}) }  ></input><br />
          <label for="senha ">Senha : </label>
          <input type="password" name="senha" value={this.state.senha} onChange={ (e) => this.setState({ senha : e.target.value}) }  ></input><br />
          <button>Enviar</button>


        </form>
      </div>

    )

  }
}



export default App;