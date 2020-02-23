import React from 'react'

    const Equipe = (props) => {
        return (
        <>
        <h1>Meu nome é {props.nome}</h1>
        <span>Cargo \ { props.cargo}</span>
        <Sobre  ano="2020"  />
        </>
        )
    }

    const Sobre = (props) => {
        return(
            <>
            <br />
            <span>Sobre o  do  {props.children.nome} > {props.ano}  </span>
            </>
        )
    }


    function PropExec(){
        return(
            <Equipe nome="Alex" cargo="Full Stack Developer" />
        )
    }



export default PropExec;