import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Button, DialogActions, DialogContentText } from '@mui/material';
import { StyledModal, StyledIconBox, StyledDialog } from './Styles';
import ListLoader from '../ListLoader';

const NotificationModal = ({
  handleModalClose,
  isOpen,
  isLoading,
  text,
  isResponseSuccess,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    handleModalClose(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledModal>
        {isLoading ? (
          <ListLoader />
        ) : (
          <>
            <StyledIconBox>
              {isResponseSuccess ? (
                <CheckCircleOutlinedIcon sx={{ color: 'green' }} />
              ) : (
                <HighlightOffOutlinedIcon sx={{ color: 'red' }} />
              )}
            </StyledIconBox>
            <DialogContentText>{text}</DialogContentText>
          </>
        )}
      </StyledModal>
      <DialogActions sx={{ background: '#fff' }}>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </StyledDialog>
  );
};

NotificationModal.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  isResponseSuccess: PropTypes.bool,
};

NotificationModal.defaultProps = {
  isResponseSuccess: true,
};

export default NotificationModal;
