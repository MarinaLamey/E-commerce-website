import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";

// رابط الـ API ديناميكي حسب البيئة
const API_URL = process.env.REACT_APP_API_URL || "https://your-api-project.vercel.app";

export const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post(
        `${API_URL}/register`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // حفظ accessToken لو موجود
      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actAuthRegister;
