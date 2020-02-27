import React, {Component} from 'react'
import "./index.css"
import Routes from  '../src/routes' 

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
      <div className="app">
        <Routes />
      </div>
      
    )

  }
}



export default App;