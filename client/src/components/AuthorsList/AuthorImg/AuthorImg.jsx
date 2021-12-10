import React from 'react';
import PropTypes from 'prop-types';
import LightTooltip from '../../ProductItem/Tooltip';
import { StyledCardMediaWrapper } from './Styles';
import {
  StyledCardMediaBox,
  StyledCardMedia,
} from '../../ProductItem/BookImg/Styles';

const AuthorImg = ({ authorUrl, name }) => {
  return (
    <LightTooltip title={name} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='325' src={authorUrl} alt={name} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightTooltip>
  );
};

AuthorImg.propTypes = {
  authorUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AuthorImg;
