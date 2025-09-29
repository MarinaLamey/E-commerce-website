import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";


const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue , signal } = thunkAPI;
    try {
      const response = await axios.get(
        "https://68da97d423ebc87faa30ade4.mockapi.io/categories" , {
          signal
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue( axiosEHandler(error ))
    }
  }
);

export default actGetcategories
