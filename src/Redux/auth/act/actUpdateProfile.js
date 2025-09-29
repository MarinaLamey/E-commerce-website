import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils";

// رابط الـ API ديناميكي
const API_URL = process.env.REACT_APP_API_URL || "https://ecommerce-api-abyq.vercel.app";

const actUpdateProfile = createAsyncThunk(
  "auth/actUpdateProfile",
  async (data, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();

    try {
      const accessToken = localStorage.getItem("accessToken"); // استخدم accessToken

      const res = await axios.patch(
        `${API_URL}/users/${auth.user.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(axiosEHandler(err));
    }
  }
);

export default actUpdateProfile;
