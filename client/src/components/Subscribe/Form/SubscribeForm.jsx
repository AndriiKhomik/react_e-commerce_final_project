import React from 'react';
import { Button } from '@mui/material';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';
import { StyledBox, StyledTextField } from './Styles';

const SubscribeForm = () => {
  return (
    <StyledBox>
      <FormTitle title='Would you like to join newsletters?' />
      <form>
        <StyledTextField
          id='outlined-basic'
          label='enter your email address...'
          variant='outlined'
        />
        <Button
          type='submit'
          variant='contained'
          style={{ color: '#FFFFFF' }}
          sx={{
            fontFamily: 'CeraPro Bold',
          }}
        >
          Join
        </Button>
      </form>
      <FormDescription text='We usually post offers and challenges in newsletter. We’re your best book friend. We offer a wide range of books from all over the world' />
    </StyledBox>
  );
};
export default SubscribeForm;
