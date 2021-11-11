import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const AdaptivePicture = ({ srcS, srcL, srcM }) => {
  return (
    <picture>
      <source media='(min-width:1100px)' srcSet={srcL} />
      <source media='(min-width:600px)' srcSet={srcM} />
      <source media='(min-width:320px)' srcSet={srcS} />
      <img src={srcS} alt='Book sales banner' />
    </picture>
  );
};

AdaptivePicture.propTypes = {
  srcS: PropTypes.string.isRequired,
  srcL: PropTypes.string.isRequired,
  srcM: PropTypes.string.isRequired,
};
