import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const FilterBtn = ({ onClick, text, svg }) => {
  return (
    <StyledButton
      onClick={onClick}
      type='submit'
      variant='contained'
      title={text}
      aria-label={text}
    >
      {svg}
      {text}
    </StyledButton>
  );
};

FilterBtn.propTypes = {
  onClick: PropTypes.func,
  svg: PropTypes.node,
  text: PropTypes.number.isRequired,
};
FilterBtn.defaultProps = {
  onClick: () => {},
  svg: null,
};

export default FilterBtn;
