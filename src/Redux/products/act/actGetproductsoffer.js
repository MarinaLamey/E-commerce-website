import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

const actGetproductsOffers = createAsyncThunk("products/actGetproductsOffers" , async(_ , thunkAPI) => {
    const { rejectWithValue} =thunkAPI;
 
    try{
        const res = await axios.get(`http://localhost:3001/products?categprefix=electronics&&isOffer=true`);
       
    return res.data
    }catch(error){
     return  rejectWithValue(axiosEHandler(error))
    }
})

export default actGetproductsOffers;