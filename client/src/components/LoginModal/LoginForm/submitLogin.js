import { loginUser } from '../../../api/user';

export const submitLogin = (e, handleClose, setError) => {
  loginUser(e).then((data) => {
    if (data.token) {
      const { token } = data;
      const currentToken = token.replace(/Bearer /i, '');
      localStorage.setItem('token', currentToken);

      handleClose();
    } else {
      setError(Object.values(data).toString());
    }
  });
};
