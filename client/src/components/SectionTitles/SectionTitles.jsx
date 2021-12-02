import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledLink,
  StyledList,
  StyledItem,
  StyledCurrentPage,
} from './Styles';

const SectionTitles = ({ titles, itemTitle }) => {
  return (
    <StyledList>
      {titles.map(({ id, title, route }, index) => {
        return (
          <StyledItem key={id}>
            {index + 1 === titles.length ? (
              <StyledCurrentPage>{itemTitle || title}</StyledCurrentPage>
            ) : (
              <StyledLink as={Link} to={route}>
                {title}
              </StyledLink>
            )}
          </StyledItem>
        );
      })}
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
  itemTitle: PropTypes.string,
};

SectionTitles.defaultProps = {
  itemTitle: '',
};

export default SectionTitles;
