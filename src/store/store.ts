import { configureStore } from "@reduxjs/toolkit";
import { serveApi } from "./serve/serve.api.ts";
import { authSlice, reducer as authReducer } from "./auth/auth.slice.ts";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
    [serveApi.reducerPath]: serveApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(serveApi.middleware)
})

export type TStore = ReturnType<typeof store.getState>