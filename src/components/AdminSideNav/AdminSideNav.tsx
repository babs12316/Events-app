import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

type AdminSideNavProps = {
  userId: string;
};
const AdminSideNav = ({ userId }: AdminSideNavProps): JSX.Element => {
  const location = useLocation();
  return (
    <div>
      <Paper sx={{ m: 5 }}>
        <MenuList>
          <MenuItem sx={{ m: 2 }}>
            <ListItemText>
              <Link to={`/dashboard/${userId}/event-types`}>Event types</Link>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ m: 2 }}>
            <ListItemText>
              {' '}
              <Link to={`/dashboard/${userId}/events`}>Events</Link>
            </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ m: 2 }}>
            <ListItemText>
              <Link to={`/dashboard/${userId}/users`}>Users</Link>
            </ListItemText>
          </MenuItem>
          <Divider />
        </MenuList>
      </Paper>
    </div>
  );
};

export default AdminSideNav;
