import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { EventsContext } from './Context/EventsContext';

import { Routes } from './routes/Routes';
import { getEvents } from './services/eventsApi';
import { Events } from './types/interface';

const App = (): JSX.Element => {
  const [events, setEvents] = useState<Events>({} as Events);

  useEffect(() => {
    getEvents().then((data: Events) => {
      setEvents(data);
    });
  }, []);
  return (
    <>
      <EventsContext.Provider value={{ events, setEvents }}>
        <Router>
          <Routes />
        </Router>
      </EventsContext.Provider>
    </>
  );
};

export default App;
