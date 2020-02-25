import React, {Component} from 'react'

import TodoList from './components/TodoList'
import '../src/estilo.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
   
    }
  }

  componentDidMount(){

  }

  render(){

    return (
      
      <div className="container">
        <h1>Lista de Tarefas</h1>
        <TodoList/>
      </div>
      
    )

  }
}



export default App;