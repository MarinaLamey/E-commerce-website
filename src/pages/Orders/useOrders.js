import React from 'react'
import {actGetOrders} from "../../Redux/orders/ordersSlice"
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'


const useOrders = () => {
  const dispatch = useDispatch()
  const { loading, error , Orderslist} = useSelector((state) => state.orders);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const viewDetailsHandler = (id) => {
    const productDetails = Orderslist.find((order) => order.id === id);
    const newItems = productDetails?.items ?? [];

    setShowModal(true);
    setSelectedProduct((prev) => [...prev, ...newItems]);
  };

  const closeModalHandler = () => {  
    setShowModal(false);                                     
    setSelectedProduct([]);
  }; 
useEffect(() => {
dispatch(actGetOrders())
},[dispatch])

  return{Orderslist,showModal,setShowModal , viewDetailsHandler , closeModalHandler , loading , error , selectedProduct }
}

export default useOrders
