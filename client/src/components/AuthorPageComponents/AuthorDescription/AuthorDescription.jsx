import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDescriptionWrapper,
  StyledDescriptionTitle,
  StyledDescription,
} from './Styles';
import { StyledAnnotation } from '../../ItemPageComponents/ItemReviewsBlock/Styles';

const AuthorDescription = ({ biography }) => {
  const bio = () => {
    return { __html: biography };
  };

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>About the author:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation dangerouslySetInnerHTML={bio()} />
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

AuthorDescription.propTypes = {
  biography: PropTypes.string.isRequired,
};

export default AuthorDescription;
