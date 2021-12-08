import React from 'react';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { validationSchema } from './validationSchema';
import { loginFormData } from './loginFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import { StyledFormWrapper } from '../Styles';
// import FormButton from '../../OrderItems/OrderForm/FormButton';
import { loginUser } from '../../../api/user';
import FormButton from '../../OrderItems/OrderForm/FormButton';

const LoginForm = () => {
  const submitLogin = (e) => {
    loginUser(e);
    console.log('====================================');
    console.log(loginUser(e));
    console.log('====================================');
    console.log('====================================');
    console.log(e);
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
          <FormButton text='Login' />
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

export default LoginForm;
