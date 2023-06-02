import { useDeleteContactMutation } from 'store/RtkQuery/rtkQueryApiService';
import Spinner from 'components/spinner/Spinner';
import './ContactItem.css';
import { toast } from 'react-toastify';
import css from '../common.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();
  if (isSuccess) toast(`Contact deleted`);
  return (
    <>
      <li className="contact__item">
        <span className="contact__info">
          {name}: {number}
        </span>
        <button
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          className={css.btn}
        >
          {isDeleting && <Spinner size="10px" />}
          Delete contact
        </button>
      </li>
    </>
  );
};

export default ContactItem;
