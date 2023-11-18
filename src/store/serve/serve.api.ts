import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHeaderItems } from "../../models/Header.model.ts";

export const serveApi = createApi({
  reducerPath: 'serveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1'
  }),
  endpoints: (build) => ({
    getHeaderItems: build.query<IHeaderItems[], null>({
      query: () => `/header`,
    }),
  })
})

export const { useGetHeaderItemsQuery } = serveApi