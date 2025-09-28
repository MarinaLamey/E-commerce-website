import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";



const actAuthLogin = createAsyncThunk( "auth/actAuthLogin",async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
 
    try {
      const res = await axios.post("http://localhost:3001/login?",{email:formData.email,
        password:formData.password
       });

      return res.data;

    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actAuthLogin