import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";

// رابط API ديناميكي حسب البيئة (Vercel أو local)
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actGetProductsSection = createAsyncThunk(
  "products/actGetProductsSection",
  async (secPrefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products`);
      const data = res.data;

      const filtered = data.filter((p) => p["secprefix"]?.includes(secPrefix));
      return filtered;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetProductsSection;

