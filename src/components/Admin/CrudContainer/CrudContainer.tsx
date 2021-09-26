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
  //  const [data, setData] = useState<dataCrud[]>([]);
  const [data, setData] = useState<any[]>([]);

  const test = [{ eventType: 'eventType' }];

  const { events, setEvents } = useGlobalContext();

  //  const { copy, setCopy } = useGlobalContext();

  const handleDelete = (itemId: number) => {
    const newData = data.filter((item: any) => item.id !== itemId);
    setData(newData);
  };

  const handleAddItem = (item: AddFields) => {
    //   console.log(`copy in additem is${copy}`);
    console.log(`item is${JSON.stringify(item)}`);
    console.log(`data is${JSON.stringify(data)}`);
    const newItem = item;
    newItem.id = Math.floor(Math.random() * 100);

    // const newData = [...data, { id: data.length, name: item }];
    let newData = [...data, newItem];
    console.log(`newdata is${JSON.stringify(newData)}`);

    setData(newData);
    newData = [];
    console.log(`newData is${newData}`);
  };

  useEffect(() => {
    console.log(`menu is${menu}`);
    getData(menu).then((data: any) => {
      setData(data);
      console.log(Object.keys(events));
    });
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddItems onAddItem={handleAddItem} menu={menu} />

      <List>
        {events &&
          events.eventType.map((item: any) => (
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
