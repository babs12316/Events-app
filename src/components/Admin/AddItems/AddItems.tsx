import React, { useContext, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import { useGlobalContext } from '../../../Context/EventsContext';
import EventType from './EventType/EventType';
import User from './User/User';

type AddItemsProps = {
  menu: string;
};

const AddItems = ({ menu }: AddItemsProps) => {
  switch (menu) {
    case 'eventType':
      return <EventType />;
    case 'user':
      return <User />;
    default:
      return <div>Add </div>;
  }
};

export default AddItems;
