import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '../store';
import HomePage from './HomePage.jsx';
import App from './App.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import AboutUsPage from './AboutUsPage.jsx';
import Dashboard from './Dashboard.jsx';

const Router = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <App>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/aboutus' component={ AboutUsPage } />
        <Route exact path='/dashboard' component={ Dashboard } />
      </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

export default Router;
