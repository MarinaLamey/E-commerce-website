import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

const actGetWishlistProduct = createAsyncThunk('wishlist/actGetWishlistProduct',async(dataType,thunkAPI)=> {
     const { rejectWithValue , signal , getState} = thunkAPI;
    const { auth } = getState()
     try {
   const userWishlist = await axios.get(`http://localhost:3001/wishlist?userId=${auth.user.id}`)
   
       if (!userWishlist.data.length) {
        return { data:[], dataType: "empty" };
      }

     if (dataType === "ProductIds") {
    
     const productId = userWishlist.data.map(item => item.productId)
      return { data: productId, dataType: "ProductsIds" };
       }else { 
const ids = userWishlist.data.map(item => item.productId).join("&id=");
const response = await axios.get(`http://localhost:3001/products?id=${ids}`);
   
      return { data: response.data, dataType: "ProductsFullInfo" };
        }


  
     }catch (error){
     return  rejectWithValue( axiosEHandler(error ))
     }
})

export default actGetWishlistProduct 