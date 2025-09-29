import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";

// API URL على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetOffersProducts = createAsyncThunk(
  "products/actGetOffersProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products?isOffer=true`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetOffersProducts;

