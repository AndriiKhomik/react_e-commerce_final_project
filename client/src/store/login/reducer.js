import {
  SET_ISLOGIN_TRUE,
  SET_ISLOGIN_FALSE,
  SET_EMAIL,
  REMOVE_EMAIL,
} from './types';

const initialState = {
  isLogin: false,
  email: '',
};

export const setIsLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISLOGIN_TRUE:
      return { ...state, isLogin: true };

    case SET_ISLOGIN_FALSE:
      return { ...state, isLogin: false };

    case SET_EMAIL:
      return { ...state, email: action.payload };

    case REMOVE_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};
