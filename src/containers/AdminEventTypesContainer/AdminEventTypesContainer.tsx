import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Input from '@mui/material/Input';
import { InputAdornment } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { EventType, getEventTypes } from '../../services/eventsApi';
import AdminEventType from '../../components/AdminEventType/AdminEventType';

const AdminEventTypesContainer = (): JSX.Element => {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const location = useLocation();

  useEffect(() => {
    getEventTypes().then((data) => {
      setEventTypes(data);
    });

    console.log(`useffect called`);
  }, []);

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {eventTypes &&
              eventTypes.map((eventType, index) => (
                <AdminEventType key={eventType.id} eventType={eventType} />
              ))}
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
};

export default AdminEventTypesContainer;
