import React, { useState } from 'react';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { validationSchema } from '../LoginForm/validationSchema';
import { registerFormData } from './registerFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import { StyledFormWrapper } from '../Styles';
import FormButton from '../../OrderItems/OrderForm/FormButton';
// import { registerUser } from '../../../api/user';

const RegisterForm = () => {
  const submitRegister = (e) => {
    delete e.confirmPassword;
    const user = { ...e };
    user.login = user.email;
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    setIsSubmitting(false);
    // registerUser(user);
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={submitRegister}
    >
      <Form>
        <StyledFormWrapper>
          {registerFormData.map(({ id, name, type, placeholder, label }) => (
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
          <FormButton text='Register' />
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
