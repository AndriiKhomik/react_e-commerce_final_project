import React from 'react';
import { subscribeItems } from './items';
import InfoItem from '../InfoItem/InfoItem';

const InfoItemsList = () => {
  return subscribeItems.map(({ id, ...item }) => (
    <InfoItem key={id} item={item} />
  ));
};

export default InfoItemsList;
