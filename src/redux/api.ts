import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://backend-b.cinqd.com/";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Departments"],
  endpoints: (builder) => ({

    getFormById: builder.query({
      query: ({id, token }) => ({
        url: `/form/get-form-by-id/${id}`,
        method: "GET",
        headers: {
          "auth-token": token,
        },
      }),
    }),
    
    getDeptByBusinessId: builder.query({
      query: ({ id, token }) => ({
        url: `/department/get-departments-by-business/${id}`,
        headers: {
          "auth-token": token,
        },
      }),

      providesTags: ["Departments"],
    }),

    getBranchesByBusinessId: builder.query({
      query: ({ id, token }) => ({
        url: `/branch/get-branches-by-business/${id}`,
        headers: {
          "auth-token": token,
        },
      }),
    }),
    getGroupByBusinessId: builder.query({
      query: ({ id, token }) => ({
        url: `/group/get-groups-by-business/${id}`,
        headers: {
          "auth-token": token,
        },
      }),
    }),
    getTeamByBusinessId: builder.query({
      query: ({ id, token }) => ({
        url: `/team/get-teams-by-business/${id}`,
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

export const { useGetFormByIdQuery, useGetLookupbyIdQuery,
   useGetDeptByBusinessIdQuery,
     useGetBranchesByBusinessIdQuery,
     useGetGroupByBusinessIdQuery, 
     useGetTeamByBusinessIdQuery,} = api;
