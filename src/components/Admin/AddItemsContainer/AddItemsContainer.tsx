import React from 'react';
import EventType from './EventType/EventType';
import User from './User/User';

type AddItemsProps = {
  menu: string;
};

const AddItemsContainer = ({ menu }: AddItemsProps) => {
  switch (menu) {
    case 'eventType':
      return <EventType />;
    case 'user':
      return <User />;
    default:
      return <div>Add Component </div>;
  }
};

export default AddItemsContainer;
