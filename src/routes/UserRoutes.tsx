import React from 'react';
import AddSubscriptionContainer from '../components/User/AddSubscriptionContainer/AddSubscriptionContainer';
import SubScribedEventsContainer from '../components/User/SubscribedEventsContainer/SubscribedEventsContainer';

export const userRoutes = [
  {
    path: '/dashboard/:userId/user-subscribed-events',
    exact: true,
    sidebar: () => <SubScribedEventsContainer />
  },

  {
    path: '/dashboard/:userId/add-subscribed-events',
    exact: true,
    sidebar: () => <AddSubscriptionContainer />
  }
];

export default userRoutes;
