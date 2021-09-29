import axios from 'axios';
import { baseUrl } from '../Constants';
import { Events } from '../types/interface';
import { User } from '../types/type';

export const getUser = async (userId: string): Promise<User> => {
  const result = await axios.get<Events>(`${baseUrl}`);
  const user = result.data.user.find((item: User) => item!.userId === userId);
  return user!;
};

export const getUserRole = async (userId: string): Promise<string> => {
  const result = await axios.get<Events>(`${baseUrl}`);
  const user = result.data.user.find((item: User) => item!.userId === userId);
  return user!.role;
};

export const getEvents = async (): Promise<Events> => {
  const result = await axios.get(`${baseUrl}`);
  return result.data;
};
