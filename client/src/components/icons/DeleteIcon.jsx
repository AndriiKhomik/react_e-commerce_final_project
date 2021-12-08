import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.8889 9.65842C18.8889 17.3301 20.0432 20.7979 12.2794 20.7979C4.51466 20.7979 5.69276 17.3301 5.69276 9.65842'
        stroke='#727272'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.3653 6.71728H4.21484'
        stroke='#727272'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.7148 6.71728C15.7148 6.71728 16.2434 3.11467 12.2891 3.11467C8.33578 3.11467 8.86435 6.71728 8.86435 6.71728'
        stroke='#727272'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
DeleteIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default DeleteIcon;
