import React from 'react';
import PropTypes from 'prop-types';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LightTooltip from '../Tooltip';
import { StyledFormatParagraph } from './Styles';

const BookFormatTag = ({ categories }) => {
  const tagTitle = categories.slice(0, -1);
  const setIcon = () => {
    switch (categories) {
      case 'ebooks':
        return <LaptopChromebookOutlinedIcon />;
      case 'audio-books':
        return <LibraryMusicOutlinedIcon />;
      default:
        return <LibraryBooksOutlinedIcon />;
    }
  };
  return (
    <LightTooltip title={tagTitle} placement='top'>
      <StyledFormatParagraph>{setIcon()}</StyledFormatParagraph>
    </LightTooltip>
  );
};

BookFormatTag.propTypes = {
  categories: PropTypes.string.isRequired,
};
export default BookFormatTag;
