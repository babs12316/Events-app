import React from 'react';
import AdminEventTypesContainer from '../containers/AdminEventTypesContainer/AdminEventTypesContainer';

export const adminRoutes = [
  {
    path: '/dashboard/:userId/event-types',
    exact: true,
    sidebar: () => <AdminEventTypesContainer />
  },
  {
    path: '/dashboard/:userId/events',
    sidebar: () => <div>EventsComponent</div>
  },
  {
    path: '/dashboard/:userId/users',
    sidebar: () => <div>UsersComponents</div>
  }
];

export default adminRoutes;
