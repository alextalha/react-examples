import React, { Component } from 'react'

import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import Sobre from "./page/Sobre"
import Home from "./page/Home"
import Header from "./components/Header"
import Erro from "./page/Erro"
import Produto from "./page/Produto"

export default class Rota extends Component {
    render() {
        return (
            <div>
                <BrowserRouter> 
                 <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/sobre" component={Sobre} /> 
                        <Route path="/produto/:id" component={Produto} />
                        <Route path="*" component={Erro} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
