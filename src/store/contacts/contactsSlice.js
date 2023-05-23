import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(newContact) {
    //     return {
    //       payload: {
    //         createdAt: new Date().toISOString(),
    //         ...newContact,
    //         id: nanoid(3),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    // fetchAllContacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log('fulfilled');
    },
    [fetchContacts.rejected]: handleRejected,
    // addNewContact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      console.log(action.payload);
    },
    [addContact.rejected]: handleRejected,
    // deleteContact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload.id);
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const persistConfig = {
  key: 'Phonebook',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
