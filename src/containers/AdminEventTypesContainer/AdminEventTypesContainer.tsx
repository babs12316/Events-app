import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { EventType, getEventTypes } from '../../services/eventsApi';
import DisplayEventTypes from '../../components/AdminEventType/DisplayEventTypes';
import AddEventType from '../../components/AdminEventType/AddEventType';

const AdminEventTypesContainer = (): JSX.Element => {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const handleDeleteEventType = (eventTypeId: number) => {
    const newEventTypes = eventTypes.filter((eventType) => eventType.id !== eventTypeId);
    setEventTypes(newEventTypes);
  };

  const handleAddEventType = (eventType: string) => {
    const newEventTypes = [...eventTypes, { id: Math.floor(Math.random() * 100), name: eventType }];
    setEventTypes(newEventTypes);
  };

  useEffect(() => {
    getEventTypes().then((data) => {
      setEventTypes(data);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddEventType onAddEventType={handleAddEventType} />
      <List>
        {eventTypes &&
          eventTypes.map((eventType) => (
            <DisplayEventTypes
              key={eventType.id}
              eventType={eventType}
              onDeleteEventType={handleDeleteEventType}
            />
          ))}
      </List>
      <Divider />
    </Box>
  );
};

export default AdminEventTypesContainer;
