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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGlobalContext = () => useContext(EventsContext);
