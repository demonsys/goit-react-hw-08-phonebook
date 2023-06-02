import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'store/auth/auth-selectors';
import css from './UserMenu.module.css';
import commonCss from '../common.module.css';
import userIcon from './user.png';
import { logOut } from 'store/auth/auth-operations';

const UserMenu = () => {
  const userName = useSelector(authSelectors.selectUsername);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <img src={userIcon} alt="avatar" width="32" />
      Hello {userName}.
      <button
        type="button"
        className={commonCss.btn + ' ' + css.logout__btn}
        onClick={() => dispatch(logOut())}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default UserMenu;
