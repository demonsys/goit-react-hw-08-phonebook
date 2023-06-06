import { useDeleteContactMutation } from 'store/RtkQuery/rtkQueryApiService';
import Spinner from 'components/spinner/Spinner';
import { toast } from 'react-toastify';
import common_css from '../common.module.css';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();
  if (isSuccess) toast(`Contact deleted`);
  return (
    <>
      <li className={css.contact__item}>
        <span className={css.contact__info}>
          {name}: {number}
        </span>
        <button
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
          className={common_css.btn + ' ' + css.del_btn}
        >
          {isDeleting && <Spinner size="10px" />}
          Delete contact
        </button>
      </li>
    </>
  );
};

export default ContactItem;
