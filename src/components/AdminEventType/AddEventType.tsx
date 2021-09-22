import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box } from '@mui/material';

type AddEventTypeProps = {
  onAddEventType: (eventType: string) => void;
};

const AddEventType = ({ onAddEventType }: AddEventTypeProps) => {
  const [eventType, setEventType] = useState<string>();
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="eventType-input">Event Type</InputLabel>
        <Input
          id="eventType-input"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEventType(e.target.value)}
        />
      </FormControl>
      <Box sx={{ m: 2 }}>
        <Button onClick={() => onAddEventType(eventType!)} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddEventType;
