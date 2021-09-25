import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box } from '@mui/material';

type AddItemsProps = {
  onAddItem: (item: string) => void;
};

const AddItems = ({ onAddItem }: AddItemsProps) => {
  const [item, setItem] = useState<string>();
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="item-input">Enter Item</InputLabel>
        <Input
          id="item-input"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItem(e.target.value)}
        />
      </FormControl>
      <Box sx={{ m: 2 }}>
        <Button onClick={() => onAddItem(item!)} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddItems;
