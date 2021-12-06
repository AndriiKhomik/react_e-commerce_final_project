import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, StyledBox, StyledModal } from './Styles';

const LoginModal = ({ isLoginModalOpen, handleClose }) => {
  return (
    <>
      <StyledModal
        open={isLoginModalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropComponent={Backdrop}
      >
        <StyledBox>sebbb</StyledBox>
      </StyledModal>
    </>
  );
};

LoginModal.propTypes = {
  isLoginModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoginModal;
