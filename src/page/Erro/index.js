import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class Erro extends Component {
    render() {
        return (
            <div>
                <h2> Ops! Pagina nao encontrada </h2>
                <h3> Voce está procurando por:  </h3>
                <Link to="/">Ir para Home</Link>
                <Link to="/sobre">Ir para Sobre</Link>
            </div>
        )
    }
}
