import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainRoutes } from '../../../types/type';

type MainProps = {
  routes: MainRoutes;
};

const Main = ({ routes }: MainProps): JSX.Element => {
  return (
    <>
      <h3>Welcome Admin</h3>

      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.sidebar />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Main;
