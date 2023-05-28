import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64629b094dca1a66134a48e5.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query(newContact) {
        return {
          url: `contacts`,
          method: 'POST',
          body: newContact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
