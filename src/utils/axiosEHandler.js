import { isAxiosError } from "axios";

const axiosEHandler = (error) => {
   if (isAxiosError(error)) {
    return error.response?.data || error.response?.data.message || error.message;
  } else {
    return "An unexpected error";
  }
}

export default axiosEHandler;
