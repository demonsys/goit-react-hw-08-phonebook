import { configureStore } from '@reduxjs/toolkit';
// import { persistedContactsReducer } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { filterReducer } from './filter/filterSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './RtkQuery/rtkQueryApiService';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'Phonebook',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsApi.reducer
);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});
export const persistor = persistStore(store);
