import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EventType } from '../../services/eventsApi';

type DisplayItemsProps = {
  item: any;
  onDeleteItem: (id: number) => void;
};

const DisplayItems = ({ item, onDeleteItem }: DisplayItemsProps): JSX.Element => {
  const handleDelete = (itemId: number) => {
    onDeleteItem(itemId);
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignContent: 'center' }}>
      <ListItem key={item.id} disablePadding>
        <ListItemButton>
          <ListItemText primary={item.name} />
          <ListItemIcon onClick={() => handleDelete(item.id)}>
            <DeleteIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default DisplayItems;
