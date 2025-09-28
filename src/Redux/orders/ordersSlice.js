import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";
const  initialState ={ 
    Orderslist :[],
    loading:'idle',
    error:null
}



const ordersSlice = createSlice({
    name:"orders",
    initialState,
    reducers:{
       resetOrderStatus: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    },
     extraReducers: (builder) => {

      //post 
      builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";

    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload) {
        state.error = action.payload;
      }
    });

    //get 
        builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state,action) => {
      state.loading = "succeeded";
      state.Orderslist = action.payload
      
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload) {
        state.error = action.payload;
      }
    });
     }
   
})

export  { actPlaceOrder , actGetOrders}
export const {resetOrderStatus} = ordersSlice.actions
export default ordersSlice.reducer;