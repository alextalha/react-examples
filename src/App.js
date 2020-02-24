import React, { Component } from 'react'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : "",
      senha : "",
      sexo : "masculino"
    }
  }


  trocaSexo(e){
    let trocaSexo = e.target.value
    this.setState({sexo : trocaSexo})

  }
  
  trocaEmail(e){

    this.setState({sexo : e.target.value})

  }
  
  
  render() {
    return (
      <div>
        <div>Login</div>
        <label>Email </label>  <input type="text" name="email" value={this.state.email}  onChange={ (e) => this.setState({ email : e.target.value})}/> <br />
         <label>Senha </label>  <input type="password" name="senha" value={this.state.senha} onChange={ (e) => this.setState({senha : e.target.value})} /> <br />
        <select name="sexo" onChange={ (e) => this.trocaSexo(e)} value={this.state.sexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

      <h3>Login {this.state.email}</h3>
      <h3>Senha {this.state.senha}</h3>
      <h3>Login {this.state.sexo}</h3>
      </div>
    )
  }
}

export default App;

