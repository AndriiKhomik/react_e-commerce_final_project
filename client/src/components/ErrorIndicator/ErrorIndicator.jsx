import React from 'react';
import { StyledDiv } from './Styled';

const ErrorIndicator = () => {
  return (
    <StyledDiv>
      <span aria-label='confused face' role='img'>
        😕
      </span>
      <p>Something went wrong, please reload page</p>
    </StyledDiv>
  );
};

export default ErrorIndicator;
