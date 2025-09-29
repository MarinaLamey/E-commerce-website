import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";




const actGetOffersProducts = createAsyncThunk("products/actGetOffersProducts" , async(_ , thunkAPI) => {
  const{rejectWithValue } = thunkAPI

  try{
  const res = await axios.get(`https://68da97d423ebc87faa30ade4.mockapi.io/products?isOffer=true`)
 
   return res.data
  }catch(error){
    rejectWithValue(axiosEHandler(error))
  }
})

export default actGetOffersProducts
