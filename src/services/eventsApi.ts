import axios from 'axios';
import { Events } from '../types/interface';

const baseUrl = '/api/events.json';

type User = Events['user'][0] | undefined;

export const getUser = async (userId: string): Promise<User> => {
  const result = await axios.get<Events>(`${baseUrl}`);
  const user = result.data.user.find((item: User) => item!.id === userId);
  return user;
};

export const getEvents = (): void => {
  console.log('hello');
};
