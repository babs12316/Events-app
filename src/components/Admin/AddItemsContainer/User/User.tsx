import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import React, { useState } from 'react';
import { useGlobalContext } from '../../../../Context/EventsContext';
import { Events } from '../../../../types/interface';

type User = Events['user'][0];

const User = () => {
  const [user, setUser] = useState<User>({} as User);
  const { events, setEvents } = useGlobalContext();
  const handleClick = (user: User) => {
    const newUser = { ...user, id: Math.random() * 1000 };
    const updatedUsers: User[] = [...events.user, newUser];
    const newEvents: Events = { ...events, user: updatedUsers };
    setEvents(newEvents);
  };

  return (
    <>
      <Box sx={{ m: 2 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="userId-input">Enter User Id</InputLabel>
          <Input
            id="userId-input"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, userId: e.target.value })
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
              setUser({ ...user, name: e.target.value })
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
              setUser({ ...user, surName: e.target.value })
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
              setUser({ ...user, email: e.target.value })
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
              setUser({ ...user, password: e.target.value })
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
            onChange={(e: SelectChangeEvent) => setUser({ ...user, role: e.target.value })}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ m: 2 }}>
        <Button type="submit" onClick={() => handleClick(user!)} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default User;
