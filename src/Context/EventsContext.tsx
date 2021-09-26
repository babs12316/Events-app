import { createContext, useContext } from 'react';
import { Events } from '../types/interface';

/* export type GlobalContent = {
  copy: string;
  setCopy: (c: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  copy: 'Hello World', // set a default value
  setCopy: () => {}
}); */

export type GlobalEvents = {
  events: Events;
  setEvents: (c: Events) => void;
};
export const EventsContext = createContext<GlobalEvents>({
  events: {} as Events,
  setEvents: () => {}
});

export const useGlobalContext = () => useContext(EventsContext);
