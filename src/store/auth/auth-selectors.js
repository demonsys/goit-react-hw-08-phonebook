const selectUsername = state => state.auth.user.name;
const selectUserEmail = state => state.auth.user.email;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectError = state => state.auth.error;
const authSelectors = {
  selectUsername,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserEmail,
  selectError,
};
export default authSelectors;
