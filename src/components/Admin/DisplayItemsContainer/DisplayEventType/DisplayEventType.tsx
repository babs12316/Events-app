import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../../../../Context/EventsContext';

const DisplayEventType = (): JSX.Element => {
  const { events, setEvents } = useGlobalContext();
  const handleDelete = (eventTypeId: number) => {
    const newEventType = events.eventType.filter((item) => item.id !== eventTypeId);
    const newEvents = { ...events, eventType: newEventType };
    setEvents(newEvents);
  };

  return (
    <div>
      {events.eventType.map((item) => (
        <Box key={item.id}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
              <ListItemIcon onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Box>
      ))}
    </div>
  );
};

export default DisplayEventType;
