import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetInfocusproducts = createAsyncThunk(
  "infocusproducts/actGetInfocusproducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(`${API_URL}/products?secprefix=InFocus`);
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetInfocusproducts;

