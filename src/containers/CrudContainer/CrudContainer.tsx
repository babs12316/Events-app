import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { getData } from '../../services/eventsApi';
import DisplayItems from '../../components/Admin/DisplayItems/DisplayItems';
import AddItems from '../../components/Admin/AddItems/AddItems';
import { Events } from '../../types/interface';
import DeleteItems from '../../components/Admin/DeleteItems/DeleteItems';
import style from './CrudContainer.module.css';

type CrudContainerProps = {
  menu: string;
};

const CrudContainer = ({ menu }: CrudContainerProps): JSX.Element => {
  type dataCrud = Events['eventType'][0] | Events['event'][0] | Events['user'][0];
  const [data, setData] = useState<dataCrud[]>([]);

  const handleDelete = (itemId: number) => {
    const newData = data.filter((item: any) => item.id !== itemId);
    setData(newData);
  };

  const handleAddItem = (item: string) => {
    const newData = [...data, { id: data.length, name: item }];
    setData(newData);
  };

  useEffect(() => {
    getData(menu).then((data: any) => {
      setData(data);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddItems onAddItem={handleAddItem} />

      <List>
        {data &&
          data.map((item: any) => (
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
