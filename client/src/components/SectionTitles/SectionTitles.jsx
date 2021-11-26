import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, StyledList, StyledItem } from './Styles';

const SectionTitles = ({ titles }) => {
  return (
    <StyledList>
      {titles.map(({ id, title, route }) => (
        <StyledItem key={id}>
          <StyledLink as={Link} to={route}>
            {title}
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

SectionTitles.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SectionTitles;