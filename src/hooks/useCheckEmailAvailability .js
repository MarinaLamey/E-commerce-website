import React, { useState } from 'react'
import axios from 'axios';
const useCheckEmailAvailability  = () => {
      const [emailAvailabilityStatus, setEmailAvailabilityStatus] =useState("idle");
      const [enteredEmail, setEnteredEmail] = useState(null);
      const checkEmailAvailability = async (email) => {
    setEnteredEmail(email);
    setEmailAvailabilityStatus("checking");
    try {
      const response = await axios.get(`http://localhost:3001/users?email=${email}`);
      if (!response.data.length) {
        setEmailAvailabilityStatus("available");
      } else {
        setEmailAvailabilityStatus("notAvailable");
      }
    } catch (error) {
      setEmailAvailabilityStatus("failed");
    }
  };
const resetCheckEmailAvailability = () => {
    setEmailAvailabilityStatus("idle");
    setEnteredEmail(null);
  };

   return {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
}

export default useCheckEmailAvailability 
