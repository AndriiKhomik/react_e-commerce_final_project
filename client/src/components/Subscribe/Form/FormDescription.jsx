import React from 'react';
import PropTypes from 'prop-types';

const FormDescription = ({ text }) => {
  return <p>{text}</p>;
};

FormDescription.propTypes = {
  text: PropTypes.string.isRequired,
};
export default FormDescription;
