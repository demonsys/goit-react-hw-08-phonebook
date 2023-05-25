import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts } from 'store/contacts/selectors';
import { selectFilter } from 'store/filter/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'store/contacts/operations';
import Loader from 'components/loader/loader';

const ContactList = () => {
  const { items: contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

  return (
    <>
      <div id="preloader" className={css.preloader + ' ' + css.visible}></div>
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      <ul className="contacts__list">
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.contacts__item}>
            {name}: {phone}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
