import { createSlice } from "@reduxjs/toolkit";
import actGetInfocusproducts from "./act/actGetInfocusproducts"


const initialState= {
    records: [],
    loading: "idle",
    error: null,
  };

const infocusproductsSlice = createSlice({
    name: "infocusproducts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(actGetInfocusproducts.pending, (state) => {
          state.loading = "pending";
          state.error = null;
         
        });
        builder.addCase(actGetInfocusproducts.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.records = action.payload;
          
        });
        builder.addCase(actGetInfocusproducts.rejected, (state, action) => {
          state.loading = "failed";
          if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
            console.log(action)
          }
        });
      },

})
export {actGetInfocusproducts} ;

export default  infocusproductsSlice.reducer;