import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts } from 'store/contacts/selectors';
import { getFilter } from 'store/filter/selectors';
import { deleteContact } from 'store/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <>
      <ul className="contacts__list">
        {filterContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contacts__item}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
