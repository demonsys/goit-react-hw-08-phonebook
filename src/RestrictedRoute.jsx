import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
