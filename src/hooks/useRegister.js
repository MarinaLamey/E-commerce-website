import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {actAuthRegister , resetUI} from "../Redux/auth/authSlice"
import { useForm  } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useNavigate , Navigate} from 'react-router-dom';
import {signUpSchema} from "../validation/signUpSchema"
import useCheckEmailAvailability from './useCheckEmailAvailability ';

const useRegister = () => {
        const {
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability
      } = useCheckEmailAvailability();
    
      
    
      const {
        register,
        handleSubmit,
        getFieldState,
        control,
        trigger,
        formState: { errors },
      } = useForm({mode: "onBlur",
        resolver: zodResolver(signUpSchema),
         defaultValues: { phone: "" }
      })
    
    
        const onBlur = async(e) => {
       await trigger("email");
        const value = e.target.value;
         const { isDirty, invalid } = getFieldState("email");
       if (isDirty && !invalid && enteredEmail !== value){
         checkEmailAvailability(value)
       }
       if (isDirty && invalid && enteredEmail) {
          resetCheckEmailAvailability();
        }
    }
    
    const dispatch = useDispatch();
    const {loading , error , accessToken} = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const onSubmit = async(data ) =>{
          const { firstName, lastName, email, password , phone }  = data;
          dispatch(actAuthRegister({ firstName, lastName, email, password , phone })).unwrap()
          .then(() => {
            navigate("/login?message=account_created");
          });
        } 
    
        
        useEffect(() => {
          return ()=> { dispatch(resetUI())}
          
        },[dispatch])
    
        return { 
        emailAvailabilityStatus,
        enteredEmail,
        checkEmailAvailability,
        resetCheckEmailAvailability , 
        register,
        handleSubmit,
        onBlur,
        loading,
        error,
        onSubmit,
        errors,
        accessToken,
        control,
        
    }
}

export default useRegister