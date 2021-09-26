import axios from 'axios';
import { Events } from '../types/interface';

const baseUrl = '/api/events.json';

type User = Events['user'][0];

type UserEvent = Events['event'][0];

export type EventType = Events['eventType'][0];

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

export const getUserEvents = async (userId: string): Promise<UserEvent> => {
  const result = await axios.get<Events>(`${baseUrl}`);
  const userEvents = result.data.event.find((item) => item!.userId.includes(userId));
  return userEvents!;
};

export const getEventTypes = async (): Promise<EventType[]> => {
  const result = await axios.get<Events>(`${baseUrl}`);
  return result.data.eventType;
};

export const getData = async (menu: string): Promise<Events> => {
  const result = await axios.get(`${baseUrl}`);

  switch (menu) {
    case 'eventType':
      return result.data.eventType;
    case 'event':
      return result.data.event;
    case 'user':
      return result.data.user;
    default:
      return result.data.eventType;
  }
};

export const getEvents = async (): Promise<Events> => {
  const result = await axios.get(`${baseUrl}`);
  return result.data;
};
