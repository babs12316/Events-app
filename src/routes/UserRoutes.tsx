import React from 'react';
import AddSubscriptionContainer from '../components/User/AddSubscriptionContainer/AddSubscriptionContainer';
import SubScribedEventsContainer from '../components/User/SubscribedEventsContainer/SubscribedEventsContainer';

export const userRoutes = [
  {
    path: '/dashboard/:userId/user-subscribed-events',
    exact: true,
    // eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
    sidebar: () => <SubScribedEventsContainer />
  },

  {
    path: '/dashboard/:userId/add-subscribed-events',
    exact: true,
    // eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
    sidebar: () => <AddSubscriptionContainer />
  }
];

export default userRoutes;
