import React from 'react';
import PropTypes from 'prop-types';

const LocationIcon = ({ fill, stroke, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 15 16'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.83415 7.05457C9.83415 6.0251 8.92347 5.19092 7.7996 5.19092C6.67654 5.19092 5.76587 6.0251 5.76587 7.05457C5.76587 8.08329 6.67654 8.91747 7.7996 8.91747C8.92347 8.91747 9.83415 8.08329 9.83415 7.05457Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.79135 14.7235C5.43336 14.7235 1.68933 10.9661 1.68933 6.9712C1.68933 3.84375 4.42086 1.30786 7.79135 1.30786C11.1618 1.30786 13.8942 3.84375 13.8942 6.9712C13.8942 10.9661 10.1501 14.7235 7.79135 14.7235Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
LocationIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
export default LocationIcon;
