import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetproductsOffers = createAsyncThunk(
  "products/actGetproductsOffers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products?categprefix=electronics&isOffer=true`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetproductsOffers;
