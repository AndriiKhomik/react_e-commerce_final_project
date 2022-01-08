import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import { TextField, Grid } from '@mui/material';
import FormButton from '../FormButton';
import InputLabel from '../../CommonFormComponents/InputLabel';
import FormNumberInput from '../../CommonFormComponents/FormNumberInput';
import ErrorMessage from '../../CommonFormComponents/ErrorMessage';
import NotificationModal from '../../NotificationModal';
import { formValues } from './formData';
import { StyledUpperWrapper, StyledBtnBox } from '../Styles';
import { validationSchema } from './validationSchema';
import { updateUser } from '../../../api/user';

const PersonalInfoForm = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  const handleModalClose = (isOpen) => {
    setIsNotificationModalOpen(isOpen);
  };

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    setIsLoading(true);
    const newValues = { ...values, email };
    updateUser(newValues, token).then(() => {
      setIsLoading(false);
    });
    resetForm({});
    setIsNotificationModalOpen(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          country: '',
          city: '',
          address: '',
          tel: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ marginBottom: '36px' }}>
            <StyledUpperWrapper container spacing={{ xs: 3 }}>
              {formValues.map(({ id, name, type, placeholder, label }) => (
                <Grid key={id} item xs={12} ds={6}>
                  <InputLabel name={name} label={label} required />
                  {name === 'tel' ? (
                    <FormNumberInput
                      name={name}
                      placeholder={placeholder}
                      type={type}
                    />
                  ) : (
                    <Field
                      id={name}
                      name={name}
                      as={TextField}
                      placeholder={placeholder}
                      type={type}
                      variant='outlined'
                      fullWidth
                    />
                  )}

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
        text='Your information was successfully changed.'
        isResponseSuccess
      />
    </>
  );
};

export default PersonalInfoForm;
