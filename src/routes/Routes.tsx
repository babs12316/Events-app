// eslint-disable-next-line import/no-cycle
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminEventTypes from '../containers/AdminEventTypesContainer/AdminEventTypesContainer';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/dashboard/:userId" exact>
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
