import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/pages/HomePage';
import ContactsPage from './components/pages/ContactsPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'store/auth/auth-operations';
import { RestrictedRoute } from 'RestrictedRoute';
import authSelectors from 'store/auth/auth-selectors';
import { PrivateRoute } from 'PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return (
    <>
      {isRefreshing ? (
        'loading...'
      ) : (
        <Container>
          <AppBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            <Route path="*" element={'Page not found'} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Container>
      )}
    </>
  );
}
