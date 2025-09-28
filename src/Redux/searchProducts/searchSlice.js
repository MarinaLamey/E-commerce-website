import { createSlice } from "@reduxjs/toolkit";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import actGetSearchproducts from "./act/actGetSearchproducts";
const  initialState = {
    records:[],
    loading:"idle",
    error:null
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{

    },
   extraReducers: (builder) => {
    builder
      .addCase(actGetSearchproducts.pending, (state) => {
      state.loading = "pending";
      state.error = null
      })
      .addCase(actGetSearchproducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetSearchproducts.rejected, (state , action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         
          }
      });
  },
})


export {actGetSearchproducts} 
export default searchSlice.reducer;