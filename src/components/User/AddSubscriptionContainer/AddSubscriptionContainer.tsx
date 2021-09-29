import React from 'react';
import { useLocation } from 'react-router';
import { useGlobalContext } from '../../../Context/EventsContext';
import getLoggedInUserId from '../../../utils/getLoggedInuser';
import AddSubscription from './AddSubscription/AddSubscription';

const AddSubscriptionContainer = () => {
  const location = useLocation();
  const { events, setEvents } = useGlobalContext();

  return (
    <div>
      {events.event
        .filter((event) => !event.userId.includes(getLoggedInUserId(location.pathname)))
        .map((item) => (
          <AddSubscription key={item.id} event={item} />
        ))}
    </div>
  );
};

export default AddSubscriptionContainer;
