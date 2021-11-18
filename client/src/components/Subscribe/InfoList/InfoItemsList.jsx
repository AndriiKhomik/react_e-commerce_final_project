import React from 'react';
import { subscribeItems } from './items';
import InfoItem from '../InfoItem/InfoItem';
import { StyledList } from './Styles';

const InfoItemsList = () => {
  return (
    <StyledList>
      {subscribeItems.map(({ id, ...item }) => (
        <InfoItem key={id} item={item} />
      ))}
    </StyledList>
  );
};

export default InfoItemsList;
