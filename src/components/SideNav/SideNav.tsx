import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { SideNavItem } from '../../types/type';

type SideNavProps = {
  userId: string;
  sideNav: SideNavItem[];
};
const SideNav = ({ userId, sideNav }: SideNavProps): JSX.Element => {
  return (
    <div>
      <Paper sx={{ m: 5 }}>
        <MenuList>
          {sideNav.map((item) => (
            <div key={item.itemPath}>
              <MenuItem sx={{ m: 2 }}>
                <ListItemText>
                  <Link to={`/dashboard/${userId}/${item.itemPath}`}>{item.itemName}</Link>
                </ListItemText>
              </MenuItem>
              <Divider />
            </div>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
};

export default SideNav;
