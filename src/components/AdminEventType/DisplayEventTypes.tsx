import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, InputAdornment, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { EventType } from '../../services/eventsApi';

type AdminEventTypeProps = {
  eventType: EventType;
  onDeleteEventType: (id: number) => void;
};

const DisplayEventType = ({ eventType, onDeleteEventType }: AdminEventTypeProps): JSX.Element => {
  const handleDelete = (eventTypeId: number) => {
    onDeleteEventType(eventTypeId);
  };
  return (
    <div>
      <ListItem key={eventType.id}>
        <Input
          defaultValue={eventType.name}
          endAdornment={
            <InputAdornment position="end" onClick={() => handleDelete(eventType.id)}>
              <DeleteIcon />
            </InputAdornment>
          }
        />
      </ListItem>
    </div>
  );
};

export default DisplayEventType;
