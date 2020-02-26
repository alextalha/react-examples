import React, {Component} from 'react'
import Rota  from './routes'

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
         <Rota/>
      </div>
      
    )

  }
}



export default App;