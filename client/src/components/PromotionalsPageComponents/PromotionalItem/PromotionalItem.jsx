import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PromotionalImg from '../PromotionalImg/PromotionalImg';
import defaultimg from '../../../img/noImgAuthor.png';
import { StyledPromoTitle, StyledItem, StyledImageLink } from './Styles';

const PromotionalItem = ({ title, imgUrl, promoId, subtitle }) => {
  return (
    <StyledItem>
      <StyledImageLink
        as={Link}
        to={`/promotions/${promoId}`}
        aria-label='move to promo page'
      >
        <PromotionalImg imgUrl={imgUrl} title={title} />
      </StyledImageLink>
      <StyledPromoTitle
        as={Link}
        to={`/promotions/${promoId}`}
        aria-label='move to promo page'
      >
        {title}
      </StyledPromoTitle>
      {subtitle}
    </StyledItem>
  );
};

PromotionalItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  promoId: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
};

PromotionalItem.defaultProps = {
  imgUrl: defaultimg,
};

export default PromotionalItem;
