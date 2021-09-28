import adminRoutes from '../routes/AdminRoutes';
import { Events } from './interface';

export type LoginCredentials = {
  userId?: string;
  password?: string;
};

export type SideNavItem = { itemName: string; itemPath: string };

export type MainRoutes = typeof adminRoutes;

export type EventType = Events['eventType'][0];

export type User = Events['user'][0];
