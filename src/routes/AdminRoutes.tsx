import React from 'react';
import CrudContainer from '../components/Admin/CrudContainer/CrudContainer';

export const adminRoutes = [
  {
    path: '/dashboard/:userId/event-types',
    exact: true,
    sidebar: () => <CrudContainer menu="eventType" />
  },

  {
    path: '/dashboard/:userId/users',
    exact: true,
    sidebar: () => <CrudContainer menu="user" />
  }
];

export default adminRoutes;
