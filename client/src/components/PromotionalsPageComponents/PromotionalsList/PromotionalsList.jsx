// import React, { useEffect, useState } from 'react';
import React from 'react';
import PromotionalItem from '../PromotionalItem/PromotionalItem';
import { StyledList } from './Styles';
import { promotionals } from '../../../Pages/PromotionalPage/hardcode';

const PromotionalsList = () => {
  const promoElements = promotionals.map(({ title, promoId, imgUrl }) => {
    return (
      <PromotionalItem
        key={promoId}
        title={title}
        imgUrl={imgUrl}
        promoId={promoId}
      />
    );
  });

  return <StyledList>{promoElements}</StyledList>;
};

export default PromotionalsList;
