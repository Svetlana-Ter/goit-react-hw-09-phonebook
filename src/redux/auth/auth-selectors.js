const isAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;

export default {
  isAuthenticated,
  getUserEmail,
};
