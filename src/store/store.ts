import { configureStore } from "@reduxjs/toolkit";
import { serveApi } from "./serve/serve.api.ts";

export const store = configureStore({
  reducer: {
    [serveApi.reducerPath]: serveApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(serveApi.middleware)
})

export type TStore = ReturnType<typeof store.getState>