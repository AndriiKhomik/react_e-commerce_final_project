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
    const popularBooks = biography.match(/<ul>(.*?)<\/ul>/g);
    console.log(popularBooks[0]);
    return { __html: biography.replace(popularBooks[0], '') };
  };

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>About the author:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation
          style={{ marginBottom: '20px' }}
          dangerouslySetInnerHTML={bio()}
        />
        <StyledDescriptionTitle>The most popular books:</StyledDescriptionTitle>
        {/* <StyledAnnotation dangerouslySetInnerHTML={popularBooks[0]} /> */}
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

AuthorDescription.propTypes = {
  biography: PropTypes.string.isRequired,
};

export default AuthorDescription;
