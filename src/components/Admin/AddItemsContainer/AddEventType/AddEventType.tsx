import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useGlobalContext } from '../../../../Context/EventsContext';
import { Events } from '../../../../types/interface';
import { EventType } from '../../../../types/type';

const AddEventType = (): JSX.Element => {
  const [eventType, setEventType] = useState<EventType>({} as EventType);
  const { events, setEvents } = useGlobalContext();
  const handleClick = (eventType: EventType) => {
    const newEventType = { ...eventType, id: Math.random() * 1000 };
    const updatedEventType: EventType[] = [...events.eventType, newEventType];
    const newEvents: Events = { ...events, eventType: updatedEventType };
    setEvents(newEvents);
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="item-input">Enter Item</InputLabel>
        <Input
          id="item-input"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEventType({ ...eventType, name: e.target.value })
          }
        />
      </FormControl>
      <Box sx={{ m: 2 }}>
        <Button onClick={() => handleClick(eventType)} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddEventType;
