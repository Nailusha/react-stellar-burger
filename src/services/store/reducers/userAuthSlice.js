import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword, loginUser, logoutUser, registerUser, resetPassword } from '../../../utils/api';


const initialState = {
  user: null,
  isAuthChecked: false,

  isLoding: false,
  error: " ",
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      
    .addCase(registerUser.pending.type, (state, action) => {
      state.isLoding = false;
      state.error = " ";
    })
      
    .addCase(registerUser.fulfilled.type, (state, action) => {
      state.user = action.payload.user;
      state.isAuthChecked = true;
      state.user = action.payload.user;
    })
      
    .addCase(registerUser.rejected.type, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;  
    })
      
    .addCase(loginUser.pending.type, (state, action) => {
      state.isLoding = false;
      state.error = " ";
    })
      
    .addCase(loginUser.fulfilled.type, (state, action) => {
      state.user = action.payload.user;
      state.isAuthChecked = true;
      state.user = action.payload.user;
    })
      
    .addCase(loginUser.rejected.type, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;  
    })

    .addCase(logoutUser.pending.type, (state) => {
      state.isLoding = true;
      state.error = " ";
    })
    .addCase(logoutUser.fulfilled.type, (state) => {
      state.user = null;
      state.isLoding = false;
    })
    .addCase(logoutUser.rejected.type, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    })
    .addCase(forgotPassword.pending.type, (state) => {
      state.isLoding = true;
      state.error = " ";
    })
    .addCase(forgotPassword.fulfilled.type, (state) => {
      state.isLoding = false;
    })
    .addCase(forgotPassword.rejected.type, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    })
    .addCase(resetPassword.pending.type, (state) => {
      state.isLoding = true;
      state.error = " ";
    })
    .addCase(resetPassword.fulfilled.type, (state) => {
      state.isLoding = false;
    })
    .addCase(resetPassword.rejected.type, (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    })
  },
});

export const { setAuthChecked, setUser} = userSlice.actions

export default userSlice.reducer;