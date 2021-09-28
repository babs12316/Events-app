import adminRoutes from '../routes/AdminRoutes';
import UserRoutes from '../routes/UserRoutes';
import { Events } from './interface';

export type LoginCredentials = {
  userId?: string;
  password?: string;
};

export type SideNavItem = { itemName: string; itemPath: string };

export type MainRoutes = typeof UserRoutes;

export type EventType = Events['eventType'][0];

export type Event = Events['event'][0];

export type User = Events['user'][0];
