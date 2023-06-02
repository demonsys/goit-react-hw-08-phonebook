import { NavLink } from 'react-router-dom';
import common from '../common.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          common.nav__link + ' ' + (isActive ? common.active : '')
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            common.nav__link + ' ' + (isActive ? common.active : '')
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
