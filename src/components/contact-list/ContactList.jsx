import css from './ContactList.module.css';
const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <>
      <ul className="contacts__list">
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(filter))
          .map(({ id, name, number }) => (
            <li key={id} className={css.contacts__item}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default ContactList;
