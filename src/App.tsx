import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './App.module.css';
import { EventsContext } from './Context/EventsContext';

import { Routes } from './routes/Routes';
import { getEvents } from './services/eventsApi';
import { Events } from './types/interface';

const App = (): JSX.Element => {
  //  const [copy, setCopy] = useState<string>('bye');

  const [events, setEvents] = useState<Events>({} as Events);

  useEffect(() => {
    getEvents().then((data: any) => {
      setEvents(data);
    });
  }, []);
  return (
    <div className={style.app}>
      <EventsContext.Provider value={{ events, setEvents }}>
        <Router>
          <Routes />
        </Router>
      </EventsContext.Provider>
    </div>
  );
};

export default App;
