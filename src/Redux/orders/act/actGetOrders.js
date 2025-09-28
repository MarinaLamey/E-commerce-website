import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";


const actGetOrders = createAsyncThunk("orders/actGetOrders" , async(_ , thunkAPI) => {
    const {rejectWithValue , fulfillWithValue ,  getState ,signal} = thunkAPI
    const {auth} = getState()
    try{
     const res = await axios.get(`http://localhost:3001/orders?userId=${auth.user?.id}`);
   
      return res.data;
    }catch(error){
     rejectWithValue(axiosEHandler(error))
    }
})

export default actGetOrders