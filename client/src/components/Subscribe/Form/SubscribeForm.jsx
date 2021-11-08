import React from 'react';
import { Button, TextField } from '@mui/material';

const SubscribeForm = () => {
  return (
    <>
      <form>
        <TextField
          id='outlined-basic'
          label='enter your email address...'
          variant='outlined'
        />
        <Button type='submit' variant='contained'>
          Join
        </Button>
      </form>
    </>
  );
};
export default SubscribeForm;
