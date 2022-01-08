import { SET_ISLOGIN_TRUE, SET_ISLOGIN_FALSE } from './types';

const initialState = {
  isLogin: false,
};

export const setIsLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISLOGIN_TRUE:
      return { ...state, isLogin: true };

    case SET_ISLOGIN_FALSE:
      return { ...state, isLogin: false };

    default:
      return state;
  }
};
