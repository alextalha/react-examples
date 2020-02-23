import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Social from './Social';


const Equipe = (props) => {
  return (
    <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
  )
}

const Sobre = (props) => {
  return (
    
    <div>
      <h2>{props.nome}</h2>
      <h3>{props.cargo}</h3>
      <span>{props.idade}</span>
    </div>
  )
}


function App(props) {
  return (

      <div>
      
        <h1>Conheça nossa equipe</h1>
        <Equipe nome={props.nome}/>
      </div>
  )
  
}

export default App;
