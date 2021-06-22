import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import Sobre from './pages/sobre/index';
import Resumo from './pages/resumo/index';
import Portfolio from './pages/portfolio/index';
import Contato from './pages/contato/index';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/resumo" component={Resumo} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contato" component={Contato} />
        </Switch>
    );
}