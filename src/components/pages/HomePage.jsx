import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/auth-selectors';

const HomePage = () => {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const userName = useSelector(authSelectors.selectUsername);
  return (
    <div className="homepage__container">
      <h1>Welcome to contact service!</h1>
      {userName ? (
        <p>{userName}, your contacts are ready to be used</p>
      ) : (
        <p>Please login or create new user</p>
      )}
    </div>
  );
};

export default HomePage;
