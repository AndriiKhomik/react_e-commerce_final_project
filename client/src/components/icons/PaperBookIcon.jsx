import React from 'react';
import PropTypes from 'prop-types';

const PaperBookIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 50 50'>
<path d="M6.487,0C5.466,0,4.634,0.832,4.634,1.854v46.292C4.634,49.168,5.466,50,6.487,50h37.026c1.021,0,1.854-0.832,1.854-1.854
			V1.854C45.366,0.832,44.534,0,43.513,0H6.487z M40.731,43.523c0,1.011-0.832,1.843-1.854,1.843H11.121
			c-1.021,0-1.854-0.832-1.854-1.843V6.476c0-1.01,0.832-1.842,1.854-1.842h1.665c1.021,0,1.854,0.832,1.854,1.842v19.762
			l2.78-5.707l2.758,5.707V6.476c0-1.01,0.854-1.842,1.854-1.842H38.88c1.021,0,1.854,0.832,1.854,1.842v37.047H40.731z"/>
    </svg>
  );
};

PaperBookIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default PaperBookIcon;
