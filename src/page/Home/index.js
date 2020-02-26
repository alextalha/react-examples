import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2> Bem Vindo  pagina Home </h2>
                <Link to="/sobre">Ir para Sobre</Link>
            </div>
        )
    }
}
