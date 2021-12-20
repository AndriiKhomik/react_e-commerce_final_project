import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDescriptionWrapper,
  StyledDescriptionTitle,
  StyledDescription,
} from './Styles';
import { StyledAnnotation } from '../../ItemPageComponents/ItemReviewsBlock/Styles';

const PromotionalDescription = ({ description, terms, subtitle }) => {
  const descr = () => {
    return { __html: description };
  };
  const term = () => {
    return { __html: terms };
  };
  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>{subtitle}:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation
          style={{ marginBottom: '20px' }}
          dangerouslySetInnerHTML={descr()}
        />
      </StyledDescription>
      <StyledDescriptionTitle>Terms of the promotion:</StyledDescriptionTitle>
      <StyledDescription>
        <StyledAnnotation
          style={{ marginBottom: '20px' }}
          dangerouslySetInnerHTML={term()}
        />
      </StyledDescription>
    </StyledDescriptionWrapper>
  );
};

PromotionalDescription.propTypes = {
  description: PropTypes.string.isRequired,
  terms: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PromotionalDescription;
