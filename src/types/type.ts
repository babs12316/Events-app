import adminRoutes from '../routes/AdminRoutes';

export type LoginCredentials = {
  id?: string;
  password?: string;
};

export type SideNavItem = { itemName: string; itemPath: string };

export type MainRoutes = typeof adminRoutes;
