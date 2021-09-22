import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useLocation } from 'react-router-dom';
import { EventType, getEventTypes } from '../../services/eventsApi';
import AdminEventType from '../../components/AdminEventType/AdminEventType';

const AdminEventTypesContainer = (): JSX.Element => {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const location = useLocation();

  const handleDeleteEventType = (eventTypeId: number) => {
    const newEventTypes = eventTypes.filter((eventType) => eventType.id !== eventTypeId);
    setEventTypes(newEventTypes);
  };

  useEffect(() => {
    getEventTypes().then((data) => {
      setEventTypes(data);
    });
  }, []);

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {eventTypes &&
              eventTypes.map((eventType, index) => (
                <AdminEventType
                  key={eventType.id}
                  eventType={eventType}
                  onDeleteEventType={handleDeleteEventType}
                />
              ))}
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
};

export default AdminEventTypesContainer;
