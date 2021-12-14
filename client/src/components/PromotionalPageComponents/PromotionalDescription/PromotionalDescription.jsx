import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDescriptionWrapper,
  StyledDescriptionTitle,
  StyledDescription,
} from './Styles';
import { StyledAnnotation } from '../../ItemPageComponents/ItemReviewsBlock/Styles';

const PromotionalDescription = ({ description }) => {
  const descr = () => {
    return { __html: description };
  };

  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>About the promo:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation
          style={{ marginBottom: '20px' }}
          dangerouslySetInnerHTML={descr()}
        />
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

PromotionalDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default PromotionalDescription;
