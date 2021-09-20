import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, InputAdornment, ListItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EventType } from '../../services/eventsApi';

type AdminEventTypeProps = {
  eventType: EventType;
};

const AdminEventType = ({ eventType }: AdminEventTypeProps): JSX.Element => {
  const location = useLocation();
  const [editedName, setEditedName] = useState<string>();
  return (
    <div>
      <ListItem key={eventType.id} disablePadding>
        <Input
          defaultValue={eventType.name}
          onChange={(e) => setEditedName(e.target.value)}
          endAdornment={
            <>
              <InputAdornment position="end">
                <Link to={`${location.pathname}/${eventType.id}/edit`}>
                  <EditIcon />
                </Link>
              </InputAdornment>
              <InputAdornment position="end">
                <DeleteIcon />
              </InputAdornment>
            </>
          }
        />
      </ListItem>
    </div>
  );
};

export default AdminEventType;
