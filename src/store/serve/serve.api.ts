import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHeaderItems } from "../../models/Header.model.ts";
import { IRecipeFull, IRecipeShort, TReactions } from "../../models/Recipe.model.ts";

export const serveApi = createApi({
  reducerPath: 'serveApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://26.158.164.189:8000/api/v1',
  }),
  endpoints: (build) => ({
    getHeaderItems: build.query<IHeaderItems[], null>({
      query: () => `/header`,
    }),
    getAllRecipesShort: build.query<IRecipeShort[], null>({
      query: () => '/recipes',
    }),
    getFullRecipe: build.query<IRecipeFull, number>({
      query: (id) => `/recipes/${id}`
    }),
    getReactions: build.query<TReactions, number>({
      query: (id) => `/recipes/${id}/get_count_reactions`
    }) ,
    addNewRecipeToFavorites: build.mutation<IRecipeShort, number>({
      query: (liked) => ({
        method: 'POST',
        url: '/recipe/add-like',
        body: { liked }
      })
    })
  })
})

export const {
  useGetHeaderItemsQuery,
  useGetAllRecipesShortQuery,
  useGetFullRecipeQuery,
  useGetReactionsQuery,
  useAddNewRecipeToFavoritesMutation
} = serveApi