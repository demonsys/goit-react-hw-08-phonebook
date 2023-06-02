import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/auth-operations';
import { toast } from 'react-toastify';
import common from '../common.module.css';
// import Spinner from 'components/spinner/Spinner';

const LoginPage = () => {
  const [email, setEmail] = useState('demonsys@gmail.com');
  const [password, setPassword] = useState('1234567');
  const dispatch = useDispatch();

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }))
      .unwrap()
      .catch(e => toast.error(e));
  };
  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <>
      <h1>Login to Your Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          email
          <input
            type="tel"
            name="email"
            required
            value={email}
            onChange={onFormChange}
            className={common.input}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={onFormChange}
            className={common.input}
          />
        </label>

        <button
          type="submit"
          // disabled={isLoading}
          className={common.btn}
        >
          LOGIN
        </button>
      </form>
    </>
  );
};
export default LoginPage;
