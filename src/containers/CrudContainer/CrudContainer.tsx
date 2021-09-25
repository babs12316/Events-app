import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { EventType, getEventTypes, getData } from '../../services/eventsApi';
import DisplayItems from '../../components/DisplayItems/DisplayItems';
import AddItems from '../../components/AddItems/AddItems';

type CrudContainerProps = {
  menu: string;
};

const CrudContainer = ({ menu }: CrudContainerProps): JSX.Element => {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [data, setData] = useState<any>([]);

  const handleDelete = (itemId: number) => {
    const newData = data.filter((item: any) => item.id !== itemId);
    setData(newData);
  };

  const handleAddItem = (item: string) => {
    const newData = [...data, { id: data.length, name: item }];
    setData(newData);
  };

  useEffect(() => {
    getData(menu).then((data) => {
      console.log(data);
      setData(data);
    });
    getEventTypes().then((data) => {
      setEventTypes(data);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddItems onAddItem={handleAddItem} />

      <List>
        {data && data.map((item: any) => <DisplayItems item={item} onDeleteItem={handleDelete} />)}
      </List>
      <Divider />
    </Box>
  );
};

export default CrudContainer;
