import React from 'react';
import { Form, Formik } from 'formik';
import { Grid } from '@mui/material';
import FormButton from '../FormButton';
import InputLabel from '../../CommonFormComponents/InputLabel';
import ErrorMessage from '../../CommonFormComponents/ErrorMessage';
import FormPasswordInput from '../FormPasswordInput';
import { passwordFormData } from './passwordFormData';
import { validationSchema } from './validationSchema';
import { StyledUpperWrapper, StyledBtnBox } from '../Styles';
import { updatePassword } from '../../../api/user';

const PasswordForm = () => {
  const token = localStorage.getItem('token');
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm({});
    updatePassword(
      {
        password: values.currentPassword,
        newPassword: values.newPassword,
      },
      token,
    );
  };
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledUpperWrapper container spacing={{ xs: 3 }}>
            {passwordFormData.map(({ id, name, label }) => (
              <Grid key={id} item xs={12}>
                <InputLabel name={name} label={label} />
                <FormPasswordInput name={name} />
                <ErrorMessage name={name} />
              </Grid>
            ))}
          </StyledUpperWrapper>
          <StyledBtnBox>
            <FormButton text='Save changes' isSubmitting={isSubmitting} />
          </StyledBtnBox>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordForm;
