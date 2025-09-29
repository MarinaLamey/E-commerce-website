import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { axiosEHandler } from "../../../utils";

const  actGetSearchproducts = createAsyncThunk("search/actGetSearchproducts" , async(searchTerm , thunkAPI)=> {
 
  const { rejectWithValue} =thunkAPI;
    try{
     const res = await axios.get(`https://68da97d423ebc87faa30ade4.mockapi.io/products?q=${searchTerm}`);
    return res.data;
    }catch(error){
    return rejectWithValue(axiosEHandler(error))
    }
})

export default actGetSearchproducts
