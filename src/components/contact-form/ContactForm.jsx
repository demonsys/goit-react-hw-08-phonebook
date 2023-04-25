import { useState } from 'react';
import './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const updateState = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = event => {
    event.preventDefault();
    onChange({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
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
            onChange={updateState}
          />
        </label>
        <label htmlFor="number">
          Number{' '}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={updateState}
          />
        </label>
        <button>Add contact</button>
      </form>
    </>
  );
};
ContactForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default ContactForm;
