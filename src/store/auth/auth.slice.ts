import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  isUserLoggedIn: false
}
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.isUserLoggedIn = !state.isUserLoggedIn
    }
  }
})

export const {reducer, actions} = authSlice