import { configureStore } from '@reduxjs/toolkit';
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
import { authSliceReducer } from './auth/authSlice';

const contactsPersistConfig = {
  key: 'Phonebook',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authSliceReducer),
    [contactsApi.reducerPath]: persistReducer(
      contactsPersistConfig,
      contactsApi.reducer
    ),
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
