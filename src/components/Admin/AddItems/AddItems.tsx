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

type AddItemsProps = {
  onAddItem: (item: AddFields) => void;
  menu: string;
};
export type AddFields = {
  id?: number;
  name?: string;
  userId?: string;
  surName?: string;
  email?: string;
  password?: string;
  role?: 'admin' | 'user';
};

const AddItems = ({ onAddItem, menu }: AddItemsProps) => {
  const [item, setItem] = useState<AddFields>({} as AddFields);
  const { events, setEvents } = useGlobalContext();
  const handleSubmit = (e: any, item: AddFields) => {
    e.preventDefault();
    console.log(`default copy is${JSON.stringify(events)}`);
    //  setCopy('hello');
    // console.log(`copy is${copy}`);
    onAddItem(item!);
  };

  switch (menu) {
    case 'eventType':
      return <EventType />;
    case 'user':
      return (
        <>
          <form onSubmit={(e) => handleSubmit(e, item!)}>
            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="userId-input">Enter User Id</InputLabel>
                <Input
                  id="userId-input"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem(Object.assign(item, { userId: e.target.value }))
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="userName-input">Enter user name</InputLabel>
                <Input
                  id="userName-input"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem(Object.assign(item, { name: e.target.value }))
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="surName-input">Enter surName </InputLabel>
                <Input
                  id="surName-input"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem(Object.assign(item, { surName: e.target.value }))
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email-input">Enter email </InputLabel>
                <Input
                  id="email-input"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem(Object.assign(item, { email: e.target.value }))
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ m: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password-input">Enter password </InputLabel>
                <Input
                  id="password-input"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItem(Object.assign(item, { password: e.target.value }))
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ m: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  label="Role"
                  onChange={(e: SelectChangeEvent) =>
                    setItem(Object.assign(item, { role: e.target.value }))
                  }
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ m: 2 }}>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        </>
      );

    default:
      return <div>Add </div>;
  }
};

export default AddItems;
