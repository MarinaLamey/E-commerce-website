import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosEHandler } from "../../../utils";

// رابط API على Vercel
const API_URL = "https://ecommerce-api-abyq.vercel.app";

const actGetProduct = createAsyncThunk(
  "product/actGetProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get(`${API_URL}/products?id=${id}`);
      return res.data[0]; // نرجع العنصر الأول لأنه البحث برقم id
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetProduct;
