import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط API ديناميكي
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState();

    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await axios.get(`${API_URL}/orders?userId=${auth.user?.id}`, {
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        },
        signal,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actGetOrders;
