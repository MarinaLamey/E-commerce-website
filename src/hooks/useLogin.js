import {actAuthLogin , resetUI} from "../Redux/auth/authSlice"
import { useDispatch , useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {signInSchema} from "../validation/signInSchema"
import { useSearchParams } from 'react-router-dom';
import { useForm  } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const useLogin = () => {

 const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm({mode: "onBlur",
    resolver: zodResolver(signInSchema),})


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading , error , accessToken} =useSelector((state) => state.auth);

   const onSubmit = (data) => {
     if(searchParams.get("message")) {
      setSearchParams("");
    }
   dispatch(actAuthLogin(data)).unwrap().then(() => {
        navigate("/");
      });
   }

const onBlur = (e) => {
  console.log(e)
}

useEffect(() => {
  return ()=> { dispatch(resetUI())}
},[dispatch])

  return {
  searchParams,
  register,
  handleSubmit,
  errors,
  loading,
  error,
  onSubmit,
  onBlur,
  accessToken
  }
}

export default useLogin
