import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAnnotation,
  StyledReviewsTitle,
  StyledReviewsTitleWrapper,
  StyledReviewsWrapper,
} from './Styles';

const ItemReviewsBlock = ({ fullDescription, reviews }) => {
  const annotation = () => {
    return { __html: fullDescription };
  };

  return (
    <StyledReviewsWrapper>
      <StyledReviewsTitleWrapper>
        <StyledReviewsTitle>Annotation</StyledReviewsTitle>
        <StyledReviewsTitle>Reviews ({reviews})</StyledReviewsTitle>
      </StyledReviewsTitleWrapper>
      <StyledAnnotation dangerouslySetInnerHTML={annotation()} />
    </StyledReviewsWrapper>
  );
};

ItemReviewsBlock.propTypes = {
  fullDescription: PropTypes.string,
  reviews: PropTypes.number,
};

ItemReviewsBlock.defaultProps = {
  fullDescription: '',
  reviews: 0,
};

export default ItemReviewsBlock;
