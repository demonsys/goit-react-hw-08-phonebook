import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import './ContactForm.module.css';
import { addContact } from 'store/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items: contacts } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const addBtn = useRef();

  const updateState = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const onSubmit = event => {
    event.preventDefault();
    updateContacts({ name, phone });
  };
  const reset = () => {
    setName('');
    setPhone('');
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
      addBtn.current.disabled = true;
      dispatch(addContact(newContact)).then(
        r => (addBtn.current.disabled = false)
      );
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
        <label htmlFor="phone">
          phone{' '}
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={updateState}
          />
        </label>
        <button ref={addBtn}>Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
