import React from 'react'
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
import {actPlaceOrder} from '../../Redux/orders/ordersSlice'
import { useDispatch, useSelector } from 'react-redux';
import { clearCartAfterPlaceOrder } from '../../Redux/cart/cartSlice';
import Spinner from '../Spinner/Spinner';


const Cartsubtotal = ({products , userAccessToken}) => {
  const subtotal = products.reduce((acc , el) => {
    const price = el.price;   
    const quantity = el.quantity;
    return acc + price * quantity;
  },0)

const [showModal, setShowModal] = useState(false);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const dispatch = useDispatch()

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(subtotal))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
{/* modal */}
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Placing Order</h2>
            <p className="text-gray-700 mb-6">
                Are you sure you want to place order with Subtotal:{" "}
                 {subtotal.toFixed(2)} EGP
                 {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={
                 placeOrderHandler
                }
                className=" flex items-center justify-center  px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
              >
               {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Confirm"
            )}
              </button>
            </div>
          </div>
        </div>
      )}
{/* modal */}


     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p className='text-3xl'>Subtotal</p>
                    <p>${subtotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  {userAccessToken && (
                  <div className="mt-6 flex items-center justify-center">
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </button>
                  </div>
                  )}
                  
                  <div className="mt-6 flex flex-row gap-2 justify-center items-center text-center text-sm text-gray-500">
                    <p>
                    Or
                    </p>
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                       
                      </button>
                       <MoveRight className=' '/>
                  
                  </div>
                </div>
                </>
  )
}

export default Cartsubtotal
