import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box } from '@mui/material';
import { Redirect } from 'react-router';
import { getUser } from '../../services/eventsApi';
import { LoginCredentials } from '../../types/type';
import style from './Login.module.css';

const Login = (): JSX.Element => {
  const [loginData, setLoginData] = useState<LoginCredentials>({} as LoginCredentials);
  const [errorMsg, setErrorMsg] = useState<string>();
  const [validUser, setValidUser] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginData.userId) {
      getUser(loginData.userId)
        .then((data) => {
          console.log(`login data is${JSON.stringify(data)}`);
          if (data) {
            if (data.password === loginData.password) {
              setValidUser(true);
            } else {
              setErrorMsg('sorry, wrong password!');
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
      <form onSubmit={handleSubmit} aria-labelledby="login" className={style.login}>
        <h1>Events app</h1>
        <h2 id="login">Login Form</h2>
        <Box sx={{ m: 2 }}>
          <FormControl>
            <InputLabel htmlFor="userName-input">User Name</InputLabel>
            <Input
              id="userName-input"
              aria-describedby="my-helper-text"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLoginData((loginData) => ({ ...loginData, userId: e.target.value }))
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControl>
            <InputLabel htmlFor="password-input">password</InputLabel>
            <Input
              id="password-input"
              type="password"
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
      {validUser && <Redirect to={`/dashboard/${loginData.userId}`} />};
    </>
  );
};

export default Login;
