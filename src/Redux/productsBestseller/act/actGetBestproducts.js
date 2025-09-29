import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const actGetBestproducts = createAsyncThunk(
  "bestsellerproducts/actGetBestproducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
         `https://68da97d423ebc87faa30ade4.mockapi.io/products?secprefix=Best`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetBestproducts;
