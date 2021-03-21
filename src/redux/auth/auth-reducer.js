import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions';

const {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions;

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isAuthenticatedReducer = createReducer(false, {
  [loginSuccess]: () => true,
  [registerSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutError]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const setError = (_, { payload }) => payload;
const errorReducer = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
  isAuthenticated: isAuthenticatedReducer,
});
