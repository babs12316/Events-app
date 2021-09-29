import React from 'react';
import CrudContainer from '../components/Admin/CrudContainer/CrudContainer';

export const adminRoutes = [
  {
    path: '/dashboard/:userId/event-types',
    exact: true,
    // eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
    sidebar: () => <CrudContainer menu="eventType" />
  },

  {
    path: '/dashboard/:userId/users',
    exact: true,
    // eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
    sidebar: () => <CrudContainer menu="user" />
  }
];

export default adminRoutes;
