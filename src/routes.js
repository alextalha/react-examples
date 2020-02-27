import React  from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './page/Home'
import Erro from './page/Erro'
import Filme from './page/Filme'

import Header from './components/Header'
const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route  path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
