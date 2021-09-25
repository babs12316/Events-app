import React from 'react';

export const userRoutes = [
  {
    path: '/dashboard/:userId/user-events',
    exact: true,
    sidebar: () => <div>User events</div>
  },
  {
    path: '/dashboard/:userId/user-profile',
    sidebar: () => <div>User profile</div>
  },
  {
    path: '/dashboard/:userId/user-event-types',
    sidebar: () => <div>User events</div>
  },
  {
    path: '/dashboard/:userId/user-subscribe',
    sidebar: () => <div>Subscribe to events</div>
  }
];

export default userRoutes;
