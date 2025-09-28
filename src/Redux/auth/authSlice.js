import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister"
import  actAuthLogin from "./act/actAuthLogin"
import actUpdateProfile from "./act/actUpdateProfile";
const initialState ={
  user:{},
  accessToken:"",
  loading: "idle",
  error: null,
}

const authSlice = createSlice({
    name: "auth",
  initialState,
reducers:{
  authLogout:(state) => {
    state.user= null 
  state.accessToken=null
  },  
  resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    }
},
extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload) {
        state.error = action.payload;
      }
    });
    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state ,action ) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
          state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload) {
        state.error = action.payload;
      }
    });

    //edit users 
     builder.addCase( actUpdateProfile.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase( actUpdateProfile.fulfilled, (state , action) => {
      state.loading = "succeeded";
      state.user = action.payload
    });
    builder.addCase( actUpdateProfile.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
}
})

export const {resetUI ,   authLogout} = authSlice.actions
export {actAuthRegister ,  actAuthLogin , actUpdateProfile}
export default authSlice.reducer