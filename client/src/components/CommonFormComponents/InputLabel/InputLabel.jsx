import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, StyledTag } from './Styles';

const InputLabel = ({ name, label, required }) => {
  return (
    <>
      <StyledLabel htmlFor={name}>
        {label} {required && <StyledTag>*</StyledTag>}
      </StyledLabel>
    </>
  );
};

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

InputLabel.defaultProps = {
  required: false,
};

export default InputLabel;
