import React from 'react';
import Box from '@mui/material/Box';
import AddItemsContainer from '../AddItemsContainer/AddItemsContainer';
import DisplayItemsContainer from '../DisplayItemsContainer/DisplayItemsContainer';

type CrudContainerProps = {
  menu: string;
};

const CrudContainer = ({ menu }: CrudContainerProps): JSX.Element => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AddItemsContainer menu={menu} />
      <DisplayItemsContainer menu={menu} />
    </Box>
  );
};

export default CrudContainer;
