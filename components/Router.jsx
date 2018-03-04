import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './HomePage.jsx';
import App from './App.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

const Router = () => (
  <BrowserRouter>
    <App>
    <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/signin' component={ SignIn }/>
        <Route exact path='/signup' component={ SignUp } />
    </Switch>
    </App>
  </BrowserRouter>
);

export default Router;
