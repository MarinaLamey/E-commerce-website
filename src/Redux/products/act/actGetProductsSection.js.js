import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";




const actGetProductsSection = createAsyncThunk("products/actGetProductsSection" , async(secPrefix , thunkAPI)=> {
  const{rejectWithValue } = thunkAPI

  try{
  const res = await axios.get(`https://68da97d423ebc87faa30ade4.mockapi.io/products?`)
  const data = res.data;

  const filtered = data.filter((p) => p["secprefix"]?.includes(secPrefix));
  return filtered;
  }catch(error){
    rejectWithValue(axiosEHandler(error))
  }
})

export default actGetProductsSection
