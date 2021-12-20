import React from 'react';
import PropTypes from 'prop-types';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { StyledFormatParagraph } from './Styles';

const BookFormatTag = ({ categories }) => {
  const setIcon = () => {
    switch (categories) {
      case 'ebooks':
        return <LaptopChromebookOutlinedIcon fontSize='large' />;
      case 'audio-books':
        return <LibraryMusicOutlinedIcon fontSize='large' />;
      default:
        return <MenuBookOutlinedIcon fontSize='large' />;
    }
  };
  return <StyledFormatParagraph>{setIcon()}</StyledFormatParagraph>;
};

BookFormatTag.propTypes = {
  categories: PropTypes.string.isRequired,
};
export default BookFormatTag;
