// uses RTKQuery under the hood for async requests -> built in thunk middleware
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

// parent slice for all users api endpoints
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], // for caching purpose
  endpoints: (builder) => ({}),
});
