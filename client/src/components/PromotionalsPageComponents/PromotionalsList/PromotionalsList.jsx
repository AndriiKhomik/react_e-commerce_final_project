import React, { useEffect, useState } from 'react';
import { getPromos } from '../../../api/promos';
import ListLoader from '../../ListLoader';
import PromotionalItem from '../PromotionalItem/PromotionalItem';
import { StyledList } from './Styles';

const PromotionalsList = () => {
  const [promos, setPromos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPromos()
      .then((data) => {
        setPromos(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const promoElements = promos.map(({ title, _id, imageUrlS, subtitle }) => {
    return (
      <PromotionalItem
        key={_id}
        title={title}
        imgUrl={imageUrlS}
        promoId={_id}
        subtitle={subtitle}
      />
    );
  });

  return isLoading ? <ListLoader /> : <StyledList>{promoElements}</StyledList>;
};

export default PromotionalsList;
