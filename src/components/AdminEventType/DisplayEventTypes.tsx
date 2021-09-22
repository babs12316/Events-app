import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EventType } from '../../services/eventsApi';

type AdminEventTypeProps = {
  eventType: EventType;
  onDeleteEventType: (id: number) => void;
};

const DisplayEventTypes = ({ eventType, onDeleteEventType }: AdminEventTypeProps): JSX.Element => {
  const handleDelete = (eventTypeId: number) => {
    onDeleteEventType(eventTypeId);
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', alignContent: 'center' }}>
      <ListItem key={eventType.id} disablePadding>
        <ListItemButton>
          <ListItemText primary={eventType.name} />
          <ListItemIcon onClick={() => handleDelete(eventType.id)}>
            <DeleteIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default DisplayEventTypes;
