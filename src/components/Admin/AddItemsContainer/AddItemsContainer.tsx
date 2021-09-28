import React from 'react';
import AddEventType from './AddEventType/AddEventType';
import AddUser from './AddUser/AddUser';

type AddItemsProps = {
  menu: string;
};

const AddItemsContainer = ({ menu }: AddItemsProps) => {
  switch (menu) {
    case 'eventType':
      return <AddEventType />;
    case 'user':
      return <AddUser />;
    default:
      return <div>Add Component </div>;
  }
};

export default AddItemsContainer;
