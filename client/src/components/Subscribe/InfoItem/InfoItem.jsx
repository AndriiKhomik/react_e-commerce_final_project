import React from 'react';
import PropTypes from 'prop-types';
import {StyledTitle,StyledText} from './Styles';

const InfoItem = ({ item }) => {
  const { component, title, text } = item;
  return (
    <div>
      {component}
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
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
