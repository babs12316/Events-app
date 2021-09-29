import { createContext, useContext } from 'react';
import { Events } from '../types/interface';

export type GlobalEvents = {
  events: Events;
  setEvents: (c: Events) => void;
};
export const EventsContext = createContext<GlobalEvents>({
  events: {} as Events,
  setEvents: () => {}
});

export const useGlobalContext = () => useContext(EventsContext);
