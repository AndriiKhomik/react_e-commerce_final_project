import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from '../Styles';

const ItemBookFormat = ({ categories }) => {
  const setIcon = () => {
    switch (categories) {
      case 'ebooks':
        return 'Electronic Book';
      case 'audio-books':
        return 'Audio Book';
      default:
        return 'Paper Book';
    }
  };
  return <StyledListItem>{setIcon()}</StyledListItem>;
};

ItemBookFormat.propTypes = {
  categories: PropTypes.string.isRequired,
};
export default ItemBookFormat;
