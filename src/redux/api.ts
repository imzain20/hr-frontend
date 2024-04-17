import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://backend-c.cinqd.com/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFormById: builder.query({
      query: ({ token, formName }) => ({
        url: `/form/get-form-by-name/${formName}`,
        method: "GET",
        headers: {
          "auth-token": token,
        },
      }),
    }),
    getLookupbyId: builder.query({
      query: ({ id, token }) => ({
        url: `/lookup/get-lookup-by-id/${id}`,
        method: "GET",
        headers: {
          "auth-token": token,
        },
      }),
    }),
  }),
});

export const { useGetFormByIdQuery, useGetLookupbyIdQuery } = api;
