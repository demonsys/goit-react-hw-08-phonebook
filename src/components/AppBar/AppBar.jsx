import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/auth-selectors';
import css from './AppBar.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};

export default AppBar;
