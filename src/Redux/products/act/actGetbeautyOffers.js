import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";
const actGetbeautyOffers =  createAsyncThunk("products/actGetbeautyOffers" , async(_ , thunkAPI) => {
    const { rejectWithValue} =thunkAPI;
 
    try{
        const res = await axios.get(`http://localhost:3001/products?categprefix=beauty&&isOffer=true`);
       
    return res.data
    }catch(error){
     return  rejectWithValue(axiosEHandler(error))
    }
})

export default actGetbeautyOffers;  
