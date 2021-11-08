import React from 'react';
import { Button, TextField } from '@mui/material';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';

const SubscribeForm = () => {
  return (
    <>
      <FormTitle title='Would you like to join newsletters?' />
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
      <FormDescription text='We usually post offers and challenges in newsletter. We’re your best book friend. We offer a wide range of books from all over the world' />
    </>
  );
};
export default SubscribeForm;
