import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({ item }) => {
  const { component, title, text } = item;
  return (
    <div>
      {component}
      <h3>{title}</h3>
      <p>{text}</p>
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
