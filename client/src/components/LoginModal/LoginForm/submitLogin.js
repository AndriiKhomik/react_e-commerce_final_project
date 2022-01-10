import { loginUser } from '../../../api/user';

export const submitLogin = (e, setError) => {
  loginUser(e).then((data) => {
    if (data.token) {
      const { token } = data;
      const currentToken = token.replace(/Bearer /i, '');
      localStorage.setItem('token', currentToken);
      setError('');
    } else {
      setError(Object.values(data).toString());
    }
  });
};
