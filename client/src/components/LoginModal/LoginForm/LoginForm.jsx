import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { validationSchema } from './validationSchema';
import { loginFormData } from './loginFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import { StyledFormWrapper } from '../Styles';
// import FormButton from '../../OrderItems/OrderForm/FormButton';
import { loginUser } from '../../../api/user';
import { StyledButton } from '../../OrderItems/CheckoutEditBtn/Styles';

const LoginForm = () => {
  const submitLogin = (event) => {
    loginUser(event);
    console.log('====================================');
    console.log(loginUser(event));
    console.log('====================================');
    console.log('====================================');
    console.log(event);
    console.log('====================================');
  };
  return (
    <Formik
      initialValues={{ loginOrEmail: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={submitLogin}
    >
      <Form>
        <StyledFormWrapper>
          {loginFormData.map(({ id, name, type, placeholder, label }) => (
            <Grid key={id} item>
              <Field
                id={name}
                name={name}
                as={TextField}
                label={label}
                placeholder={placeholder}
                type={type}
                variant='outlined'
                fullWidth
              />

              <StyledErrorMessage component='div' name={name} />
            </Grid>
          ))}
          <StyledButton type='submit' variant='contained' title='Login'>
            Login
          </StyledButton>
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

export default LoginForm;
