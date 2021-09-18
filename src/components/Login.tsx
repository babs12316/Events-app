import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box } from '@mui/material';
import { getUser } from '../services/eventsApi';
import { LoginCredentials } from '../types/type';

const Login = (): JSX.Element => {
  const [loginData, setLoginData] = useState<LoginCredentials>({} as LoginCredentials);
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submitted${JSON.stringify(loginData)}`);
    if (loginData.id) {
      getUser(loginData.id)
        .then((data) => {
          if (data) {
            if (data.password === loginData.password) {
              console.log('its a valid user should redirect to dashboard page');
            }
          } else {
            setErrorMsg('sorry, wrong crendetials!');
          }
        })
        .catch((error) => setErrorMsg(error));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ m: 2 }}>
          <FormControl>
            <InputLabel htmlFor="userName-input">User Name</InputLabel>
            <Input
              id="userName-input"
              aria-describedby="my-helper-text"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLoginData((loginData) => ({ ...loginData, id: e.target.value }))
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControl>
            <InputLabel htmlFor="password-input">password</InputLabel>
            <Input
              id="password-input"
              aria-describedby="my-helper-text"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLoginData((loginData) => ({ ...loginData, password: e.target.value }))
              }
            />
          </FormControl>
        </Box>

        <Box sx={{ '& button': { m: 2 } }}>
          <FormControl>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </FormControl>
        </Box>

        {errorMsg && <FormHelperText sx={{ color: '#FF0000' }}>{errorMsg}</FormHelperText>}
        <FormHelperText id="my-helper-text">Valid user names are john_1 & james_2.</FormHelperText>
      </form>
    </>
  );
};

export default Login;
