import React from 'react';
import DisplayEventType from './DisplayEventType/DisplayEventType';
import DisplayUser from './DisplayUser/DisplayUser';

type DisplyItemsContainerProps = {
  menu: string;
};

const AddItemsContainer = ({ menu }: DisplyItemsContainerProps): JSX.Element => {
  switch (menu) {
    case 'eventType':
      return <DisplayEventType />;
    case 'user':
      return <DisplayUser />;
    default:
      return <div>Display Component </div>;
  }
};

export default AddItemsContainer;
