import React from 'react';
import PropTypes from 'prop-types';
// <<<<<<< HEAD
// import { StyledCardMediaBox, StyledImageWrapper } from './Styles';
// import { Picture } from './Pictire';

// const PromotionalImg = ({ srcS, srcL, srcM }) => {
//   return (
//     <StyledCardMediaBox>
//       <StyledImageWrapper>
//         <Picture srcS={srcS} srcM={srcM} srcL={srcL} />
//       </StyledImageWrapper>
// =======
import { StyledCardMediaBox, StyledCardMedia } from './Styles';
import defaultimg from '../../../img/missing_image.jpg';

const PromotionalImg = ({ img, name }) => {
  return (
    <StyledCardMediaBox>
      <StyledCardMedia src={img} alt={name} />
    </StyledCardMediaBox>
  );
};

PromotionalImg.propTypes = {
  // <<<<<<< HEAD
  //   srcS: PropTypes.string.isRequired,
  //   srcL: PropTypes.string.isRequired,
  //   srcM: PropTypes.string.isRequired,
  // =======
  name: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

PromotionalImg.defaultProps = {
  img: defaultimg,
};

export default PromotionalImg;
