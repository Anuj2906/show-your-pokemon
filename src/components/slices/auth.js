// slices/auth.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  password: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
      state.isLoggedIn = true;
    },
    clearAuth(state) {
      state.username = null;
      state.password = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
