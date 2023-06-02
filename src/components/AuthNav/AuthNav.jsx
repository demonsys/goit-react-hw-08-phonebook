import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import common from '../common.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          common.nav__link + ' ' + (isActive ? common.active : '')
        }
      >
        {' '}
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          common.nav__link + ' ' + (isActive ? common.active : '')
        }
      >
        {' '}
        Login page
      </NavLink>
    </div>
  );
}
