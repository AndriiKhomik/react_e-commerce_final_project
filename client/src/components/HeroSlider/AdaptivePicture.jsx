import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const AdaptivePicture = ({ srcS, srcL }) => {
  return (
    <picture>
      <source media='(max-width:768px)' srcSet={srcS} />
      <source media='(min-width:769px)' srcSet={srcL} />
      <img src={srcS} alt='Book sales banner' />
    </picture>
  );
};

AdaptivePicture.propTypes = {
  srcS: PropTypes.string.isRequired,
  srcL: PropTypes.string.isRequired,
};
