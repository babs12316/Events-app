import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useLocation } from 'react-router';
import { useGlobalContext } from '../../../Context/EventsContext';
import SubscribedEvent from '../SubscribedEvent/SubscribedEvent';
import { Event } from '../../../types/type';

const SubScribedEventsContainer = (): JSX.Element => {
  const { events, setEvents } = useGlobalContext();
  const location = useLocation();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Events by status">
              <Tab label="Active Events" value="1" />
              <Tab label="Past Events" value="2" />
            </TabList>
          </Box>
          {events.event
            .filter((event: Event) => event.userId.includes(location.pathname.split('/')[2]))
            .map((item: Event) => (
              <SubscribedEvent key={item.id} subScribedEvent={item} />
            ))}
        </TabContext>
      </Box>
    </>
  );
};

export default SubScribedEventsContainer;
