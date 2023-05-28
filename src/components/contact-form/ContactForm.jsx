import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'store/contacts/selectors';
import './ContactForm.css';
import { useAddContactMutation } from 'store/RtkQuery/rtkQueryApiService';
import Spinner from 'components/spinner/Spinner';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items: contacts } = useSelector(selectContacts);
  const addBtn = useRef();
  const [addContact, { isLoading }] = useAddContactMutation();

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

        <button ref={addBtn} disabled={isLoading} className="button_primary">
          {isLoading ? <Spinner size="10px" /> : 'Add contact'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
