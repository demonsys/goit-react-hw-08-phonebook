import { useDeleteContactMutation } from 'store/RtkQuery/rtkQueryApiService';
import Spinner from 'components/spinner/Spinner';
import './ContactItem.css';
import { toast } from 'react-toastify';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();
  if (isSuccess) toast(`Contact deleted`);
  return (
    <>
      <li className="contact__item">
        <span className="contact__info">
          {name}: {phone}
        </span>
        <button
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          className="button_primary"
        >
          {isDeleting && <Spinner size="10px" />}
          Delete contact
        </button>
      </li>
    </>
  );
};

export default ContactItem;
