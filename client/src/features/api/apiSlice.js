import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    // Define your API endpoints here
  }),
});