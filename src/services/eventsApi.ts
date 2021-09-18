import axios from 'axios';
import { Events } from '../types/interface';

const baseUrl = '/api/events.json';

export const getUser = async (userId: string) => {
  const result = await axios.get<Events>(`${baseUrl}`);
  type User = typeof result.data.user[0];
  const user = result.data.user.find((item: User) => item.id === userId);
  return user;
};

export const getEvents = (): void => {
  console.log('hello');
};
