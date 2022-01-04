import { useDispatch } from 'react-redux';
import { loginUser } from '../../../api/user';
import { setIsLoginTrue } from '../../../store/login/actions';

export const submitLogin = (e, handleClose, setError) => {
  const dispatch = useDispatch();
  loginUser(e).then((data) => {
    if (data.token) {
      dispatch(setIsLoginTrue());
      const { token } = data;
      const currentToken = token.replace(/Bearer /i, '');
      localStorage.setItem('token', currentToken);

      handleClose();
    } else {
      setError(Object.values(data).toString());
    }
  });
};
