import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import { useLocation } from 'react-router';
import { useGlobalContext } from '../../../../Context/EventsContext';
import { Event } from '../../../../types/type';
import getLoggedInUserId from '../../../../utils/getLoggedInuser';

type AddSubscriptionProps = {
  event: Event;
};

const AddSubscription = ({ event }: AddSubscriptionProps): JSX.Element => {
  const { events } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const handleClick = (event: Event) => {
    const newEvent: Event[] = [...events.event];
    if (newEvent) {
      newEvent
        .find((item: Event) => item.id === event.id)
        ?.userId.push(getLoggedInUserId(location.pathname));
    }

    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon onClick={() => handleClick(event)}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={event.name} />
        </ListItemButton>
      </ListItem>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Event subscribed"
      />
    </>
  );
};

export default AddSubscription;
