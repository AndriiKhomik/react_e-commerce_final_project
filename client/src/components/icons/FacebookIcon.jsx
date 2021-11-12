import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 8 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 5.33333H0V8H2V16H5.33333V8H7.73333L8 5.33333H5.33333V4.2C5.33333 3.6 5.46667 3.33333 6.06667 3.33333H8V0H5.46667C3.06667 0 2 1.06667 2 3.06667V5.33333Z'
        fillOpacity='0.76'
      />
    </svg>
  );
};
FacebookIcon.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
export default FacebookIcon;
