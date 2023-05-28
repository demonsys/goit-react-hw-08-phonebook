import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilter } from 'store/filter/selectors';
import { useGetContactsQuery } from 'store/RtkQuery/rtkQueryApiService';
import ContactItem from '../contactItem/ContactItem';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const filterContacts = contacts
    ?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
  return (
    <>
      {isLoading && !error && (
        <div id="preloader" className={css.preloader}></div>
      )}
      {error && <p>{error.data}</p>}
      {contacts && (
        <ul className="contacts__list">
          {filterContacts.map(contact => (
            <ContactItem
              key={contact.id}
              {...contact}
              className={css.contacts__item}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
