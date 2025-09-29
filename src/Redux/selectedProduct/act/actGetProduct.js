import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";


const actGetProduct = createAsyncThunk("product/actGetProduct", async(id , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
     try{
     const res = await axios.get(`https://68da97d423ebc87faa30ade4.mockapi.io/products?id=${id}`)
     return res.data[0]
     }catch(error){
        rejectWithValue(axiosEHandler(error))
     }
})

export default actGetProduct;
