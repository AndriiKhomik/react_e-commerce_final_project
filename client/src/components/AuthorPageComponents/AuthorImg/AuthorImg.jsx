import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardMediaBox, StyledCardMedia } from './Styles';

import defaultimg from '../../../img/missing_image.jpg';

const AuthorImg = ({ img, name }) => {
  return (
    <StyledCardMediaBox>
      <StyledCardMedia src={img} alt={name} />
    </StyledCardMediaBox>
  );
};

AuthorImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

AuthorImg.defaultProps = {
  img: defaultimg,
};

export default AuthorImg;
