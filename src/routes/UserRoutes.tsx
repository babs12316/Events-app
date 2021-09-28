import React from 'react';
import SubScribedEventsContainer from '../components/User/SubscribedEventsContainer/SubscribedEventsContainer';

const test = 'hello';
export const userRoutes = [
  {
    path: '/dashboard/:userId/user-subscribed-events',
    exact: true,
    sidebar: () => <SubScribedEventsContainer test={test} />
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
  }
];

export default userRoutes;
