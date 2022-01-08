import { SET_ISLOGIN_TRUE, SET_ISLOGIN_FALSE } from './types';

export const setIsLoginTrue = () => ({
  type: SET_ISLOGIN_TRUE,
  payload: true,
});

export const setIsLoginFalse = () => ({
  type: SET_ISLOGIN_FALSE,
  payload: false,
});
