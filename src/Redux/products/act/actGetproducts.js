import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetproducts = createAsyncThunk(
  "products/actGetproducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const response = await axios.get(`${API_URL}/products?categprefix=${prefix}`, { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetproducts;

