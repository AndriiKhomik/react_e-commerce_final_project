import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAnnotation,
  StyledReviewsTitle,
  StyledReviewsTitleWrapper,
  StyledReviewsWrapper,
} from './Styles';

const ItemReviewsBlock = ({ fullDescription }) => {
  const annotation = () => {
    return { __html: fullDescription };
  };

  return (
    <StyledReviewsWrapper>
      <StyledReviewsTitleWrapper>
        <StyledReviewsTitle>Annotation</StyledReviewsTitle>
      </StyledReviewsTitleWrapper>
      <StyledAnnotation dangerouslySetInnerHTML={annotation()} />
    </StyledReviewsWrapper>
  );
};

ItemReviewsBlock.propTypes = {
  fullDescription: PropTypes.string,
};

ItemReviewsBlock.defaultProps = {
  fullDescription: '',
};

export default ItemReviewsBlock;
