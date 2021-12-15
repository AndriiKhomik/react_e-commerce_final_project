// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { getAuthors } from '../../../api/authors';
import PromotionalItem from '../PromotionalItem/PromotionalItem';
// import ListLoader from '../../ListLoader';
import { StyledList } from './Styles';
import { promotionals } from '../../../Pages/PromotionalPage/hardcode';

const PromotionalsList = () => {
  // const [authors, setAuthors] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getAuthors()
  //     .then((data) => {
  //       setAuthors(data);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);
  console.log(promotionals);
  const promoElements = promotionals.map(({ title, promoId, promoUrl }) => {
    return (
      <PromotionalItem
        key={promoId}
        title={title}
        promoUrl={promoUrl}
        promoId={promoId}
      />
    );
  });

  // return isLoading ? <ListLoader /> : <StyledList>{promoElements}</StyledList>;
  return <StyledList>{promoElements}</StyledList>;
};

export default PromotionalsList;
