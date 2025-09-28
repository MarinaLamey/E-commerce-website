import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cartitem from "../../../componants/cartItem/Cartitem";
import { axiosEHandler } from "../../../utils/index";

const actGetproductByitems = createAsyncThunk('cart/actGetproductByitems' , async(_, thunkAPI ) => {
    const { rejectWithValue ,  fulfillWithValue,  getState  , signal} = thunkAPI;
    const {cart} = getState() ;

    const itemsId = Object.keys(cart.items);    //id comes true 

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try{
       
  
         const response = await axios.get(`http://localhost:3001/products`, {signal}).then((res) => {
           const filtered = res.data.filter(item => itemsId.includes(item.id));
           return filtered; 
         })
         return response
       
      
    }catch (error) {
  return rejectWithValue( axiosEHandler(error))
    }
})


export default actGetproductByitems ;