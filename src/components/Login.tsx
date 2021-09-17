import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button , Box} from '@mui/material';


const Login = (): JSX.Element => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">User Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text"  />
        <Box sx={{ '& button': { m: 2 ,  width: 300} }}>
      <div>
      <Button variant="contained">Login</Button>
      </div>
      </Box>
        <FormHelperText id="my-helper-text">Valid user names are John & James.</FormHelperText>
      </FormControl>
    </>
  );
};

export default Login;
