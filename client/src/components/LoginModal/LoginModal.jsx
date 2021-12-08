import React, { useState } from 'react';
import PropTypes from 'prop-types';
import theme from '../../services/theme/theme';
import {
  Backdrop,
  StyledBox,
  StyledCloseBtnDiv,
  StyledLoginTitleWrapper,
  StyledModal,
  StyledTitleDelimiter,
} from './Styles';
import ModalClose from '../icons/ModalClose';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

const LoginModal = ({ isLoginModalOpen, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const onLoginForm = () => setIsLogin(true);
  const onRegisterForm = () => setIsLogin(false);

  return (
    <>
      <StyledModal
        open={isLoginModalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropComponent={Backdrop}
      >
        <StyledBox>
          <StyledCloseBtnDiv onClick={handleClose}>
            <ModalClose
              width='12px'
              height='12px'
              fill={theme.palette.primary.dark}
            />
          </StyledCloseBtnDiv>
          <StyledLoginTitleWrapper>
            <LoginTitle
              onClick={onLoginForm}
              text='Login'
              color={
                isLogin ? theme.palette.primary.main : theme.palette.text.main
              }
            />
            <StyledTitleDelimiter />
            <LoginTitle
              onClick={onRegisterForm}
              text='Register'
              color={
                isLogin ? theme.palette.text.main : theme.palette.primary.main
              }
            />
          </StyledLoginTitleWrapper>
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </StyledBox>
      </StyledModal>
    </>
  );
};

LoginModal.propTypes = {
  isLoginModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoginModal;
