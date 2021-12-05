import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDescriptionWrapper,
  StyledDescriptionTitle,
  StyledDescription,
} from './Styles';
import { StyledAnnotation } from '../../ItemPageComponents/ItemReviewsBlock/Styles';

const AuthorDescription = ({ biography }) => {
  const popularBooks = biography.match(/<ul>(.*?)<\/ul>/g);
  const bio = () => {
    return { __html: biography.replace(popularBooks[0], '') };
  };

  const popBooks = () => {
    return { __html: popularBooks[0] };
  };

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>About the author:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation
          style={{ marginBottom: '20px' }}
          dangerouslySetInnerHTML={bio()}
        />
        <StyledDescriptionTitle style={{ marginBottom: '10px' }}>
          The most popular books:
        </StyledDescriptionTitle>
        <StyledAnnotation
          style={{ marginBottom: '0' }}
          dangerouslySetInnerHTML={popBooks()}
        />
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

AuthorDescription.propTypes = {
  biography: PropTypes.string.isRequired,
};

export default AuthorDescription;
