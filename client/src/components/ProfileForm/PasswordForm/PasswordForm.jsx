import React, { useState } from 'react';
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
import NotificationModal from '../../NotificationModal';

const PasswordForm = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const token = localStorage.getItem('token');

  const handleModalClose = (isOpen) => {
    setIsNotificationModalOpen(isOpen);
  };

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    setIsLoading(true);
    updatePassword(
      {
        password: values.currentPassword,
        newPassword: values.newPassword,
      },
      token,
    ).then((data) => {
      if (data.customer) {
        setMessage('You have successfully change your password.');
        setIsResponseSuccess(true);
        resetForm({});
      } else {
        setMessage(data.password);
        setIsResponseSuccess(false);
      }
      setIsLoading(false);
    });
    setIsNotificationModalOpen(true);
  };
  return (
    <>
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
                  <FormPasswordInput name={name} autoComplete='on' />
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
      <NotificationModal
        isOpen={isNotificationModalOpen}
        isLoading={isLoading}
        handleModalClose={handleModalClose}
        text={message}
        isResponseSuccess={isResponseSuccess}
      />
    </>
  );
};

export default PasswordForm;
