import ContactForm from 'components/contact-form/ContactForm';
import ContactList from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.outer_container}>
        <ContactForm />
        <div className={css.inner_container}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
export default ContactsPage;
