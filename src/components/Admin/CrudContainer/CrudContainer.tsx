import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { getData } from '../../../services/eventsApi';
import DisplayItems from '../DisplayItems/DisplayItems';
import AddItems, { AddFields } from '../AddItems/AddItems';
import { Events } from '../../../types/interface';
import DeleteItems from '../DeleteItems/DeleteItems';
import style from './CrudContainer.module.css';
import { useGlobalContext } from '../../../Context/EventsContext';

type CrudContainerProps = {
  menu: string;
};

const CrudContainer = ({ menu }: CrudContainerProps): JSX.Element => {
  type dataCrud = Events['eventType'][0] | Events['event'][0] | Events['user'][0];
  const [data, setData] = useState<any[]>([]);

  const { events, setEvents } = useGlobalContext();

  const handleDelete = (itemId: number) => {
    const newData = data.filter((item: any) => item.id !== itemId);
    setData(newData);
  };

  const handleAddItem = (item: AddFields) => {
    const newItem = item;
    newItem.id = Math.floor(Math.random() * 100);
    const newData = [...data, newItem];
    setData(newData);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddItems onAddItem={handleAddItem} menu={menu} />

      <List>
        {events &&
          menu === 'eventType' &&
          events.eventType.map((item: any) => (
            <div key={item.id} className={style.crudContainer}>
              <DisplayItems item={item} />
              <DeleteItems onDeleteItem={() => handleDelete(item.id)} />
            </div>
          ))}
        {events &&
          menu === 'event' &&
          events.event.map((item: any) => (
            <div key={item.id} className={style.crudContainer}>
              <DisplayItems item={item} />
              <DeleteItems onDeleteItem={() => handleDelete(item.id)} />
            </div>
          ))}
        {events &&
          menu === 'user' &&
          events.user.map((item: any) => (
            <div key={item.id} className={style.crudContainer}>
              <DisplayItems item={item} />
              <DeleteItems onDeleteItem={() => handleDelete(item.id)} />
            </div>
          ))}
      </List>
      <Divider />
    </Box>
  );
};

export default CrudContainer;
