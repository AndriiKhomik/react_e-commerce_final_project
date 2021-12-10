import React from 'react';
import { Form, Formik } from 'formik';
import { Grid, TextField } from '@mui/material';
import { validationSchema } from './validationSchema';
import { loginFormData } from './loginFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import { StyledField, StyledFormWrapper } from '../Styles';
import { loginUser } from '../../../api/user';
import FormButton from '../../OrderItems/OrderForm/FormButton';

const LoginForm = () => {
  const submitLogin = (e) => {
    loginUser(e).then((data) => {
      const { token } = data;
      localStorage.setItem('token', token);
    });
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
              <StyledField
                id={name}
                name={name}
                as={TextField}
                label={label}
                placeholder={placeholder}
                type={type}
                variant='outlined'
                autocomplete='on'
                fullWidth
              />
              <StyledErrorMessage component='div' name={name} />
            </Grid>
          ))}
          <FormButton text='Login' />
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

export default LoginForm;
