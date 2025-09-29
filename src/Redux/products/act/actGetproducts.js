import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";



const actGetproducts = createAsyncThunk(
  "products/actGetproducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue , signal} = thunkAPI;
    try {
      const response = await axios.get(
         `https://68da97d423ebc87faa30ade4.mockapi.io/products?categprefix=${prefix}` , {signal}
      );
      return response.data;
    } catch (error) {
      rejectWithValue(axiosEHandler(error))
    }
  }
);

export default actGetproducts
