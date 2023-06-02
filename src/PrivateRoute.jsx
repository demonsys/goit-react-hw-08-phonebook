import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'store/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  return !isRefreshing && !isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};
