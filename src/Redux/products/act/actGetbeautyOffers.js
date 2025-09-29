import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetbeautyOffers = createAsyncThunk(
  "products/actGetbeautyOffers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products?categprefix=beauty&isOffer=true`);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetbeautyOffers;

