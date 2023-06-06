import { useSelector } from 'react-redux';
import common from '../common.module.css';
import css from './ContactList.module.css';
import { selectFilter } from 'store/filter/selectors';
import { useGetContactsQuery } from 'store/RtkQuery/rtkQueryApiService';
import ContactItem from '../contactItem/ContactItem';
import { useEffect } from 'react';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { data: contacts, error, isLoading, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const filterContacts = contacts
    ?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
  return (
    <>
      {isLoading && !error && (
        <div id="preloader" className={common.preloader}></div>
      )}
      {error && <p>{error.data.message}</p>}
      {contacts && (
        <ul className={css.contacts__list}>
          {filterContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
