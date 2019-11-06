import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Customer/Landing/Landing';
import Calculator from './Components/Customer/Calculator/Calculator';
import Products from './Components/Customer/Products/Products';
import Login from './Components/Admin/Login';
import Leads from './Components/Admin/Leads/Leads';


export default (
    <Switch>
        <Route exact path = '/' component={Landing} />
        <Route path = '/calculator' component={Calculator} />
        <Route path = '/products' component={Products} />
        <Route path = '/login' component={Login} />
        <Route path = '/leads' component={Leads} />
    </Switch>
)