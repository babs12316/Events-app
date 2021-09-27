import React, { useEffect, useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useGlobalContext } from '../../../Context/EventsContext';

type DisplayItemsProps = {
  item: any;
};

const DisplayItems = ({ item }: DisplayItemsProps): JSX.Element => {
  const { events, setEvents } = useGlobalContext();

  useEffect(() => {
    console.log(`in display event is${JSON.stringify(events)}`);
  }, []);

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
