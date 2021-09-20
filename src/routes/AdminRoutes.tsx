import React from 'react';
import AdminEventTypes from '../components/AdminEventTypes/AdminEventTypes';

export const adminRoutes = [
  {
    path: '/dashboard/:userId/event-types',
    exact: true,
    sidebar: () => <AdminEventTypes />
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
