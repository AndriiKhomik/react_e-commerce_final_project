import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledText, StyledBox } from './Styles';

const InfoItem = ({ item }) => {
  const { component, title, text } = item;
  return (
    <div>
      {component}
      <StyledTitle>{title}</StyledTitle>
      <StyledBox>
        <StyledText>{text}</StyledText>
      </StyledBox>
    </div>
  );
};

InfoItem.propTypes = {
  item: PropTypes.shape({
    component: PropTypes.node.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default InfoItem;
