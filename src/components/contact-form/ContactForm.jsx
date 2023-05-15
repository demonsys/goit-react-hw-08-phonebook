import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import './ContactForm.module.css';
import { addContact } from 'store/contacts/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
      dispatch(addContact(newContact));
      reset();
    } else alert(`${newContact.name} is already in contacts`);
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

export default ContactForm;
