import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/dashboard" exact>
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
