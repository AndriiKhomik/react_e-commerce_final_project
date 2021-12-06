import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, StyledBox, StyledModal } from './Styles';

const Modal = ({ isLoginModalOpen, handleClose }) => {
  return (
    <>
      <StyledModal
        open={isLoginModalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropComponent={Backdrop}
      />
      <StyledBox>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </StyledBox>
      <StyledModal />
    </>
  );
};

Modal.propTypes = {
  isLoginModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
