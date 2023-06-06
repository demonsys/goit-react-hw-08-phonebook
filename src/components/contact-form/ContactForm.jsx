import { useState } from 'react';
import common_css from '../common.module.css';
import css from './ContactForm.module.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'store/RtkQuery/rtkQueryApiService';
import Spinner from 'components/spinner/Spinner';
import { toast } from 'react-toastify';
import randomNames from './randomNames';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading, error }] = useAddContactMutation();

  const { data: contacts } = useGetContactsQuery();
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
    updateContacts({ name, number });
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  // check is contact is alreadry in list
  const isUnique = name => {
    return (
      contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
      ).length === 0
    );
  };
  const updateContacts = newContact => {
    if (isUnique(newContact.name)) {
      addContact(newContact).then(r => {
        if (r.data) {
          toast(`Contact '${r.data.name}' added successfully`);
          reset();
        }
      });
    } else alert(`${newContact.name} is already in contacts`);
  };
  return (
    <>
      <form className={css.addContact_form} onSubmit={onSubmit}>
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
            className={css.input}
          />
        </label>
        <label htmlFor="number">
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={updateState}
            className={css.input}
          />
        </label>
        <button type="submit" disabled={isLoading} className={common_css.btn}>
          {isLoading ? <Spinner size="10px" /> : 'Add contact'}
        </button>
        <button
          disabled={isLoading}
          className={common_css.btn + ' ' + css.btn__random}
          onClick={() =>
            updateContacts({
              name: randomNames[Math.round(Math.random() * 49)],
              number: Math.round(Math.random() * 9000000 + 10000000),
            })
          }
        >
          {isLoading ? <Spinner size="10px" /> : 'Add random contact'}
        </button>
        {error && <p>{error.data.message}</p>}
      </form>
    </>
  );
};

export default ContactForm;
