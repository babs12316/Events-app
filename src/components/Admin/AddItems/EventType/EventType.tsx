import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { useGlobalContext } from '../../../../Context/EventsContext';
import { Events } from '../../../../types/interface';

type EventType = Events['eventType'][0];

const EventType = () => {
  const [eventType, setEventType] = useState<EventType>({} as EventType);
  const { events, setEvents } = useGlobalContext();
  const handleClick = () => {
    const newEventType: EventType[] = [...events.eventType, eventType];
    const newEvents: Events = { ...events, eventType: newEventType };
    setEvents(newEvents);
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="item-input">Enter Item</InputLabel>
        <Input
          id="item-input"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEventType({ id: events.eventType.length + 1, name: e.target.value })
          }
        />
      </FormControl>
      <Box sx={{ m: 2 }}>
        <Button onClick={handleClick} variant="contained">
          Add
        </Button>
      </Box>
    </div>
  );
};

export default EventType;
