import React from 'react';
import PropTypes from 'prop-types';

const EmailIcon = ({ fill, stroke, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 16'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.0465 5.72217C13.0465 5.72217 10.4346 8.59357 8.52428 8.59357C6.61474 8.59357 3.97351 5.72217 3.97351 5.72217'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.766113 7.92057C0.766113 2.82407 2.70339 1.12573 8.51523 1.12573C14.3271 1.12573 16.2643 2.82407 16.2643 7.92057C16.2643 13.0163 14.3271 14.7154 8.51523 14.7154C2.70339 14.7154 0.766113 13.0163 0.766113 7.92057Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

EmailIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default EmailIcon;
