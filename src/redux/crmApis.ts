import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:83/";

export const crmApi = createApi({
  reducerPath: "crmAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    SubmitForm: builder.mutation({
      query: ({ bodyData, token }) => ({
        url: `/customer/create-customer`,
        method: "POST",
        body: bodyData,
        headers: {
          "auth-token": token,
        },
      }),
    }),
    getCustomerData: builder.query({
      query: ({ token }) => ({
        url: `/customer/get-customer-data`,
        method: "GET",
        headers: {
          "auth-token": token,
        },
      }),
    }),
    UploadCustomerSheet: builder.mutation({
      query: ({ bodyData, token }) => ({
        url: `/customer/upload-customer-sheet`,
        method: "POST",
        body: bodyData,
        headers: {
          "auth-token": token,
        },
      }),
    }),
    getCustomerDataById: builder.query({
      query: ({ token, id }) => ({
        url: `/customer/get-customer-data-by-id/${id}`,
        method: "GET",
        headers: {
          "auth-token": token,
        },
      }),
    }),
  }),
});

export const {
  useSubmitFormMutation,
  useGetCustomerDataQuery,
  useUploadCustomerSheetMutation,
  useGetCustomerDataByIdQuery,
} = crmApi;
