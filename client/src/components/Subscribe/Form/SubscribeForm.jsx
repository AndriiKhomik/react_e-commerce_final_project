import React, { useState } from 'react';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';
import { StyledBox, StyledTextField, StyledButton } from './Styles';

const SubscribeForm = () => {
  const [value, setValue] = useState('');
  const onClick = (event) => {
    event.preventDefault();
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledBox>
      <FormTitle title='Would you like to join newsletters?' />
      <form>
        <StyledTextField
          value={value}
          placeholder='Enter your email'
          style={{ backgroundColor: '#fff' }}
          onChange={handleChange}
        />
        <StyledButton
          type='submit'
          variant='contained'
          style={{ color: '#FFFFFF' }}
          sx={{
            fontFamily: 'CeraPro Bold',
          }}
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
