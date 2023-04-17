import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className="contacts__list">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contacts__item}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
