import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from '../Styles';

const ItemInfoBookSize = ({ pages, duration }) => {
  const durationHours = (mins) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}h ${minutes}m`;
  };

  return pages ? (
    <StyledListItem>{pages}</StyledListItem>
  ) : (
    <StyledListItem>{durationHours(duration)}</StyledListItem>
  );
};

ItemInfoBookSize.propTypes = {
  pages: PropTypes.number,
  duration: PropTypes.number,
};

ItemInfoBookSize.defaultProps = {
  pages: '',
  duration: '',
};

export default ItemInfoBookSize;
