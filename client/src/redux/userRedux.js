import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    isRegistering: false,
    registrationError: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isRegistering = true;
    },
    registerSuccess: (state, action) => {
      state.isRegistering = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isRegistering = false;
      state.registrationError = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
      state.isFetching = false;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
