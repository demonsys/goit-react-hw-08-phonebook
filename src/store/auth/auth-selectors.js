const selectUsername = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const authSelectors = { selectUsername, selectIsLoggedIn, selectIsRefreshing };
export default authSelectors;
