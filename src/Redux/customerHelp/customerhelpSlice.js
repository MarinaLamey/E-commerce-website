import { createSlice } from "@reduxjs/toolkit";
import actPostContact from "./act/actPostContact";

const initialState= {
    records: [],
    loading: "idle",
    error: null,
  };


  const customerhelpSlice = createSlice({
   name: "contact",
    initialState,
     reducers: {
    resetContact: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actPostContact.pending, (state) => {
        state.loading = "pending";
        
        state.error = null;
      })
      builder.addCase(actPostContact.fulfilled, (state) => {
       state.loading = "succeeded"; 
      })
      builder.addCase(actPostContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  })
  export {actPostContact}
   export const {resetContact} = customerhelpSlice.actions 
  export default customerhelpSlice.reducer
  