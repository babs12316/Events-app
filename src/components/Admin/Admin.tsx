import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { adminRoutes } from '../../routes/AdminRoutes';

const Admin = (): JSX.Element => {
  return (
    <>
      <h3>Welcome Admin</h3>

      <Switch>
        {adminRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.sidebar />
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Admin;
