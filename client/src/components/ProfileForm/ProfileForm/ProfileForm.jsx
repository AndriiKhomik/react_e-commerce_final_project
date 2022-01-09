import React from 'react';
import PersonalInfoForm from '../PersonalInfoForm';
import PasswordForm from '../PasswordForm';
import FormTitle from '../../CommonFormComponents/FormTitle';
import { StyledWrapper } from './Styles';

const ProfileForm = () => {
  return (
    <StyledWrapper>
      <FormTitle text='Personal information' />
      <PersonalInfoForm />
      <FormTitle text='Password change' />
      <PasswordForm />
    </StyledWrapper>
  );
};

export default ProfileForm;
