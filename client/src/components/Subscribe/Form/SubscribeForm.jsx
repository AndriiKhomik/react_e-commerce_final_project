import React, { useState } from 'react';
import { Formik } from 'formik';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';
import NotificationModal from '../../NotificationModal';
import {
  StyledBox,
  StyledTextField,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
} from './Styles';
import { validationSchema } from './validationSchema';
import { addSubscriber } from '../../../api/subscribers';
import { subscribeLetter } from '../subscribeLetter';

const SubscribeForm = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const handleModalClose = (isOpen) => {
    setIsNotificationModalOpen(isOpen);
  };

  const submitHandler = (values, { resetForm }) => {
    setIsLoading(true);
    addSubscriber({ ...values, ...subscribeLetter }).then((data) => {
      if (data.subscriber) {
        setMessage(
          'You have successfully subscribed to our newsletter. We have sent the first letter to your email.',
        );
        setIsResponseSuccess(true);
      } else {
        setMessage(data.message);
        setIsResponseSuccess(false);
      }
      setIsLoading(false);
      resetForm({});
    });
    setIsNotificationModalOpen(true);
  };

  return (
    <>
      <StyledBox>
        <FormTitle title='Would you like to join newsletters?' />
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <StyledForm>
            <StyledTextField
              name='email'
              placeholder='Enter your email'
              style={{ backgroundColor: '#fff' }}
            />
            <StyledErrorMessage component='div' name='email' />
            <StyledButton
              type='submit'
              variant='contained'
              style={{ color: '#FFFFFF' }}
              sx={{
                fontFamily: 'CeraPro Bold',
              }}
            >
              Join
            </StyledButton>
          </StyledForm>
        </Formik>
        <FormDescription text='We usually post offers and challenges in newsletter. We’re your best book friend. We offer a wide range of books from all over the world' />
      </StyledBox>
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
export default SubscribeForm;
