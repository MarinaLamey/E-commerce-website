import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط الـ API ديناميكي
const API_URL = process.env.REACT_APP_API_URL || "https://your-api-project.vercel.app";

export const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(
        `${API_URL}/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // حفظ accessToken بدل token
      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actAuthLogin;
