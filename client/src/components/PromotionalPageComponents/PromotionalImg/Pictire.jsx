import React from 'react';
import PropTypes from 'prop-types';

export const Picture = ({ srcS, srcL, srcM }) => {
  return (
    <picture>
      <source media='(min-width:1100px)' srcSet={srcL} />
      <source media='(min-width:600px)' srcSet={srcM} />
      <source media='(min-width:320px)' srcSet={srcS} />
      <img src={srcS} alt='Promo banner' />
    </picture>
  );
};

Picture.propTypes = {
  srcS: PropTypes.string.isRequired,
  srcL: PropTypes.string.isRequired,
  srcM: PropTypes.string.isRequired,
};
