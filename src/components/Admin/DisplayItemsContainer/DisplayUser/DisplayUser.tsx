import React from 'react';
import { Box, Divider, ListItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useGlobalContext } from '../../../../Context/EventsContext';

const DisplayUser = (): JSX.Element => {
  const { events, setEvents } = useGlobalContext();

  const handleDelete = (userId: number) => {
    const newUsers = events.user.filter((item) => item.id !== userId);
    const newEvents = { ...events, user: newUsers };
    setEvents(newEvents);
  };

  return (
    <div>
      {events.user.map((item) => (
        <Box>
          <ListItem key={item.id}>
            <Card sx={{ width: 400 }}>
              <CardContent>
                <Typography sx={{ m: 2 }} color="text.secondary">
                  User name
                </Typography>
                <Typography sx={{ m: 2 }} variant="h5" component="div">
                  {item.name}
                </Typography>
                <Divider />
                <Typography sx={{ m: 2 }} color="text.secondary">
                  User surname
                </Typography>
                <Typography sx={{ m: 2 }} component="div">
                  {item.surName}
                </Typography>
                <Divider />
                <Typography sx={{ m: 2 }} color="text.secondary">
                  User email
                </Typography>
                <Typography sx={{ m: 2 }} color="text.primary">
                  {item.email}
                </Typography>
                <Divider />
                <Typography sx={{ m: 2 }} color="text.secondary">
                  User role
                </Typography>
                <Typography sx={{ m: 2 }} color="text.primary">
                  {item.role}
                </Typography>
                <Divider />
              </CardContent>
              <CardActions sx={{ m: 2 }}>
                <Button size="small" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        </Box>
      ))}
    </div>
  );
};

export default DisplayUser;
