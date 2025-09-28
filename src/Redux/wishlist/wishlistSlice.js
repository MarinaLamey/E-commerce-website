import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle"
import actGetWishlistProduct  from "./act/actGetWishlist"
import { authLogout } from "../auth/authSlice";
const initialState ={
itemsId:[],
productsFullInfo: [],
 loading:'idle',
 error:null,
}



const wishlishList = createSlice({
    name:"wishlist",
    initialState,
    reducers: {
    productsFullInfoCleanUp: (state) => {
      state.productsFullInfo = [];
    }
    },
    extraReducers : (builder) => {
       builder.addCase(actLikeToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled , (state , action)=> {
      state.loading= "succeeded"
        if(action.payload.type === "add"){
              state.itemsId = [...state.itemsId, action.payload.id];
        }else{
            state.itemsId = state.itemsId.filter((el) => el !== action.payload.id)
             state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload.id)
        }
    })
      builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
     builder.addCase(actGetWishlistProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase( actGetWishlistProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.dataType === "ProductsFullInfo") {
        state.productsFullInfo = action.payload.data;
      } else if (action.payload.dataType === "ProductsIds") {
        state.itemsId= action.payload.data ;
       
      }
    });
    builder.addCase( actGetWishlistProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
     // when logout reset
    builder.addCase(authLogout, (state) => {
      state.itemsId = [];
      state.productsFullInfo = [];
    });
    }
  
})

export default wishlishList.reducer;
export const { productsFullInfoCleanUp} = wishlishList.actions; 
export {actLikeToggle , actGetWishlistProduct };