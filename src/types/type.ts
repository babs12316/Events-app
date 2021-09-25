import adminRoutes from '../routes/AdminRoutes';

export type LoginCredentials = {
  userId?: string;
  password?: string;
};

export type SideNavItem = { itemName: string; itemPath: string };

export type MainRoutes = typeof adminRoutes;
