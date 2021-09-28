import React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import { Event } from '../../../types/type';

type EventsProps = {
  subScribedEvent: Event;
};

const SubscribedEvent = ({ subScribedEvent }: EventsProps): JSX.Element => {
  return (
    <>
      {subScribedEvent.status && <TabPanel value="1">{subScribedEvent.name}</TabPanel>}
      {!subScribedEvent.status && <TabPanel value="2">{subScribedEvent.name}</TabPanel>}
    </>
  );
};

export default SubscribedEvent;
