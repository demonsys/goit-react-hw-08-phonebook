import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from 'store/auth/auth-operations';
import common from '../common.module.css';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(createNewUser({ name, email, password }))
      .unwrap()
      .catch(e => toast.error(e));
    // resetForm();
  };
  // const resetForm = () => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <>
      <h1>Registration page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onFormChange}
            className={common.input}
          />
        </label>
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
          //   disabled={isLoading}
          className={common.btn}
        >
          Create user
        </button>
      </form>
    </>
  );
};
export default RegisterPage;
