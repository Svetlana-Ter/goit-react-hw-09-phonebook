import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';
import authReducer from './auth/auth-reducer';
import storage from 'redux-persist/lib/storage';

const authPersistconfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistconfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
