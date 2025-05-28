import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthenticated } from './selectors';
import { actions } from './reducer';

const { setIsAuthenticated } = actions;

export const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getAuthenticated);

  const handleSignin = () => {
    dispatch(setIsAuthenticated(true));
  };

  if (isAuthenticated) return <></>;

  return (
    <Paper elevation={3}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          padding: '0px 20px',
        }}
      >
        <Typography>Sign in</Typography>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField variant='outlined' placeholder='your username' />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <TextField
            variant='outlined'
            placeholder='your password'
            type='password'
          />
        </FormControl>

        <Button onClick={handleSignin}>Sign in</Button>
      </Box>
    </Paper>
  );
};
