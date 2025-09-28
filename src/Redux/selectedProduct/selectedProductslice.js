import { createSlice } from "@reduxjs/toolkit";
import actGetProduct from "./act/actGetProduct";


const initialState= {
    product:[],
    loading: "idle",
    error: null,
  };

const selectedProductslice = createSlice({
    name: "product",
    initialState,
    reducers:{
      productCleanUp: (state) =>{
        state.product=[];
      }
    },
    extraReducers: (builder) => {
  //selected product 
         builder.addCase(actGetProduct.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetProduct.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.product = action.payload;
         
        });
        builder.addCase(actGetProduct.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
          }
        });
    }
})

export const { productCleanUp} = selectedProductslice.actions;
export {actGetProduct}
export default selectedProductslice.reducer;
