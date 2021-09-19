// eslint-disable-next-line import/no-cycle
import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './AdminContainer.module.css';
import AdminEventTypes from '../../components/AdminEventTypes/AdminEventTypes';

const AdminContainer = () => {
  const location = useLocation();
  const adminRoutes = [
    {
      path: '/dashboard/:userId/event-types',
      exact: true,
      sidebar: () => <div>Hello</div>
    },
    {
      path: '/dashboard/:userId/events',
      sidebar: () => <div>EventsComponent</div>
    },
    {
      path: '/dashboard/:userId/users',
      sidebar: () => <div>UsersComponents</div>
    }
  ];

  return (
    <Router>
      <div className={style.adminContainer}>
        <div className={style.item1}>
          <Paper sx={{ m: 5 }}>
            <MenuList>
              <MenuItem sx={{ m: 2 }}>
                <ListItemText>
                  <Link to={`${location.pathname}/event-types`}>Event types</Link>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ m: 2 }}>
                <ListItemText>
                  {' '}
                  <Link to={`${location.pathname}/events`}>Events</Link>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ m: 2 }}>
                <ListItemText>
                  <Link to={`${location.pathname}/users`}>Users</Link>
                </ListItemText>
              </MenuItem>
              <Divider />
            </MenuList>
          </Paper>
        </div>
        <div className={style.item2}>
          <Switch>
            {adminRoutes.map((route, index) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.sidebar />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminContainer;
