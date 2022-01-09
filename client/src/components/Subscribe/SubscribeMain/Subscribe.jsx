import React from 'react';
import SubscribeForm from '../Form/SubscribeForm';
import InfoItemsList from '../InfoList/InfoItemsList';
import { StyledBox } from './Styles';

const Subscribe = () => {
  return (
    <StyledBox>
      <InfoItemsList />
      <SubscribeForm />
    </StyledBox>
  );
};

export default Subscribe;
