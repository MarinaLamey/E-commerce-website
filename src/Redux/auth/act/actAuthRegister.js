import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosEHandler } from "../../../utils/index";




const actAuthRegister = createAsyncThunk( "auth/actAuthRegister",async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
 
    try {
      const res = await axios.post("http://localhost:3001/register?",{firstName:formData.firstName ,
        lastName:formData.lastName,
        email:formData.email,
        password:formData.password,
        phone:formData.phone
    });
     
      return res.data;

    } catch (error) {
      return rejectWithValue(axiosEHandler(error));
    }
  }
);

export default actAuthRegister;