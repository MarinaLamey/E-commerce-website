import { createSlice } from "@reduxjs/toolkit";
import {  getCartTotalQuantitySelector} from "./selectors/index"
import actGetproductByitems from './act/actGetproducrByitems'

const initialState= {
    items: {},
   productFullInfo: [],
    loading: "idle",
    error:null
  };


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const id = action.payload;
        if (state.items[id]) {
          state.items[id]++;
        } else {
          state.items[id] = 1;
        }
      },
      changeQuantityCart:(state , action) => {
        state.items[action.payload.id] = action.payload.quantity
      },
      removeItemCart: (state,action) => {
        delete state.items[action.payload]
        state.productFullInfo = state.productFullInfo.filter((el) => el.id !== action.payload)
      },
      productsFullInfoCleanp: (state) => {
      state.productFullInfo = []
      },
      clearCartAfterPlaceOrder:(state) => {
         state.items = {};
      state.productFullInfo = [];
      }
  },
   extraReducers: (builder) => {
      builder.addCase(actGetproductByitems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    
    });
    builder.addCase(actGetproductByitems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
      
     
    });
    builder.addCase( actGetproductByitems.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
       
      }
    }
  )}
    })


    export{
  getCartTotalQuantitySelector,
  actGetproductByitems,
    }
export const { addToCart , changeQuantityCart ,   removeItemCart ,  productsFullInfoCleanp , clearCartAfterPlaceOrder} = cartSlice.actions;
export default cartSlice.reducer;

