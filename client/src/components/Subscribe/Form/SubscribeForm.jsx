import React from 'react';
// import { Button } from '@mui/material';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';
import { StyledBox, StyledTextField, StyledButton } from './Styles';

const SubscribeForm = () => {
  const onClick = (event) => {
    event.preventDefault();
    console.log('click');
  };

  return (
    <StyledBox>
      <FormTitle title='Would you like to join newsletters?' />
      <form>
        <StyledTextField
          id='filled-basic'
          label='enter your email address...'
          variant='outlined'
          style={{ backgroundColor: '#fff' }}
          size='small'
        />
        <StyledButton
          type='submit'
          variant='contained'
          style={{ color: '#FFFFFF' }}
          sx={{
            fontFamily: 'CeraPro Bold',
          }}
          size='small'
          onClick={onClick}
        >
          Join
        </StyledButton>
      </form>
      <FormDescription text='We usually post offers and challenges in newsletter. We’re your best book friend. We offer a wide range of books from all over the world' />
    </StyledBox>
  );
};
export default SubscribeForm;
