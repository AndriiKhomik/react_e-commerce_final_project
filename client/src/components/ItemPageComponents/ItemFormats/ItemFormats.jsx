import React from 'react';
import { formatItems } from './formatItems';
import SingleFormat from './SingleFormat/SingleFormat';
import { StyledFormatsWrapper, StyledFormatTitle, StyledList } from './Styles';

const ItemFormats = () => {
  return (
    <StyledFormatsWrapper>
      <StyledFormatTitle>Format:</StyledFormatTitle>
      <StyledList>
        {formatItems.map(({ id, ...item }) => (
          <SingleFormat key={id} item={item} />
        ))}
      </StyledList>
    </StyledFormatsWrapper>
  );
};

export default ItemFormats;
