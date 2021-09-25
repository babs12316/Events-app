import React from 'react';
import CrudContainer from '../containers/CrudContainer/CrudContainer';

export const adminRoutes = [
  {
    path: '/dashboard/:userId/event-types',
    exact: true,
    sidebar: () => <CrudContainer menu="eventType" />
  },
  {
    path: '/dashboard/:userId/events',
    sidebar: () => <CrudContainer menu="event" />
  },
  {
    path: '/dashboard/:userId/users',
    sidebar: () => <CrudContainer menu="user" />
  }
];

export default adminRoutes;
