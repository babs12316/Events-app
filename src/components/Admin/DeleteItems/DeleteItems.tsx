import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, ListItemIcon } from '@mui/material';

type DeleteItemsProps = {
  onDeleteItem: () => void;
};

const DeleteItems = ({ onDeleteItem }: DeleteItemsProps): JSX.Element => {
  const handleDelete = () => {
    onDeleteItem();
  };
  return (
    <Box>
      <ListItemIcon onClick={() => handleDelete()}>
        <DeleteIcon />
      </ListItemIcon>
    </Box>
  );
};

export default DeleteItems;
