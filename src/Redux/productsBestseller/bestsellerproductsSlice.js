import { createSlice } from "@reduxjs/toolkit";
import  actGetBestproducts from "./act/actGetBestproducts"


const initialState= {
    records: [],
    loading: "idle",
    error: null,
  };

const bestproductsSlice = createSlice({
    name: "bestsellerproducts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetBestproducts.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetBestproducts.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.records = action.payload;
          console.log(action)
        });
        builder.addCase(actGetBestproducts.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
           
          }
        });
      },

})
export {actGetBestproducts} ;

export default  bestproductsSlice.reducer;