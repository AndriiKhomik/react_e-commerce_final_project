import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import PromotionalImg from '../PromotionalImg/PromotionalImg';
import defaultimg from '../../../img/noImgAuthor.png';
// import { setSelectedAuthorId } from '../../../store/filter/actions';
import { StyledPromoTitle, StyledItem, StyledImageLink } from './Styles';

const PromotionalItem = ({ title, promoUrl, promoId }) => {
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //   dispatch(setSelectedAuthorId(id));
  // };

  return (
    <StyledItem>
      <StyledImageLink
        as={Link}
        to={`/promotionals/${promoId}`}
        aria-label='move to promo page'
      >
        <PromotionalImg promoUrl={promoUrl} title={title} />
      </StyledImageLink>
      <StyledPromoTitle
        as={Link}
        to={`/promotionals/${promoId}`}
        aria-label='move to promo page'
      >
        {title}
      </StyledPromoTitle>
    </StyledItem>
  );
};

PromotionalItem.propTypes = {
  title: PropTypes.string.isRequired,
  promoId: PropTypes.string.isRequired,
  promoUrl: PropTypes.string,
};

PromotionalItem.defaultProps = {
  promoUrl: defaultimg,
};

export default PromotionalItem;
