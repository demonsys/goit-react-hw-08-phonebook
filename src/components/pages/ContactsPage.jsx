import ContactForm from 'components/contact-form/ContactForm';
import ContactList from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
