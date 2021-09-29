import React from 'react';
import { useLocation } from 'react-router';
import { useGlobalContext } from '../../../Context/EventsContext';
import getLoggedInUserId from '../../../utils/getLoggedInuser';
import AddSubscription from './AddSubscription/AddSubscription';

const AddSubscriptionContainer = (): JSX.Element => {
  const location = useLocation();
  const { events } = useGlobalContext();

  return (
    <>
      {events.event
        .filter((event) => !event.userId.includes(getLoggedInUserId(location.pathname)))
        .map((item) => (
          <AddSubscription key={item.id} event={item} />
        ))}
    </>
  );
};

export default AddSubscriptionContainer;
