import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import actGetcategories from "./act/actGetcategories"


const initialState= {
    records: [],
    loading: "idle",
    error: null,
  };

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
     recordsClenUp:(state) => {
      state.records = [];
     }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetcategories.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetcategories.fulfilled, (state, action) => {
        state.records = action.payload;
         state.loading = "succeeded";    
        });
        builder.addCase(actGetcategories.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
          
          }
        });
      },

})
export {actGetcategories} ;
export const { recordsClenUp } = categoriesSlice.actions;
export default categoriesSlice.reducer;