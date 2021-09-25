import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

type DisplayItemsProps = {
  item: any;
};

const DisplayItems = ({ item }: DisplayItemsProps): JSX.Element => {
  return (
    <Box>
      <ListItem key={item.id} disablePadding>
        <ListItemButton>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default DisplayItems;
