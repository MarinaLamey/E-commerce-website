import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط API ديناميكي
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actGetproductByitems = createAsyncThunk(
  "cart/actGetproductByitems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const { cart } = getState();

    // لو items عبارة عن object keys، نجيب الـ ids
    const itemsId = Object.keys(cart.items); 

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(`${API_URL}/products`, {
        headers: { 
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined
        },
        signal,
      });

      // فلترة المنتجات حسب الـ ids في الكارت
      const filtered = res.data.filter(item => itemsId.includes(String(item.id)));

      return filtered;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetproductByitems;
