import React from 'react';
import PropTypes from 'prop-types';

const FormTitle = ({ title }) => {
  return <h3>{title}</h3>;
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormTitle;
