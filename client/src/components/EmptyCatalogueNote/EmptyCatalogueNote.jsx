import React from 'react';
import { StyledNote, StyledIcon } from './Styles';

const EmptyCatalogueNote = () => {
  return (
    <StyledNote>
      We don&apos;t find books. <StyledIcon />
      <br /> Please, try other filter parameters.
    </StyledNote>
  );
};

export default EmptyCatalogueNote;
