import {
  SET_ISLOGIN_TRUE,
  SET_ISLOGIN_FALSE,
  SET_EMAIL,
  REMOVE_EMAIL,
} from './types';

export const setIsLoginTrue = () => ({
  type: SET_ISLOGIN_TRUE,
  payload: true,
});

export const setIsLoginFalse = () => ({
  type: SET_ISLOGIN_FALSE,
  payload: false,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const removeEmail = () => ({
  type: REMOVE_EMAIL,
  payload: '',
});
