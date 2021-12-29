import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const ClearFilterBtn = ({ onClick, text, svg }) => {
  return (
    <StyledButton
      onClick={onClick}
      type='submit'
      variant='outlined'
      title={text}
      aria-label={text}
    >
      {svg}
      {text}
    </StyledButton>
  );
};

ClearFilterBtn.propTypes = {
  onClick: PropTypes.func,
  svg: PropTypes.node,
  text: PropTypes.string.isRequired,
};

ClearFilterBtn.defaultProps = {
  onClick: () => {},
  svg: null,
};

export default ClearFilterBtn;
