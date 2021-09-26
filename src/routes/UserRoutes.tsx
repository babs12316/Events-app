import React from 'react';
import EventsContainer from '../components/User/EventsContainer/EventsContainer';

export const userRoutes = [
  {
    path: '/dashboard/:userId/user-events',
    exact: true,
    sidebar: () => <EventsContainer />
  },
  {
    path: '/dashboard/:userId/user-profile',
    exact: true,
    sidebar: () => <div>User profile</div>
  },
  {
    path: '/dashboard/:userId/user-event-types',
    exact: true,
    sidebar: () => <div>User events</div>
  },
  {
    path: '/dashboard/:userId/user-subscribe',
    exact: true,
    sidebar: () => <div>Subscribe to events</div>
  }
];

export default userRoutes;
