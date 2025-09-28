import React from 'react'
import useOrders from './useOrders';
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom';
import "../../componants/Card/card.css"
import Loading from '../../componants/feedback/Loading/Loading';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./orders.css"
const Orders  = () => {

  const {Orderslist,showModal, viewDetailsHandler , closeModalHandler , loading,error , selectedProduct } = useOrders()
  return (
    <>
{/* Modal */}
 {showModal && (
        <div className=" fixed inset-0 flex items-center justify-center  bg-black/50 z-50 ">
          <div className=" bg-white rounded shadow-2xl p-6 text-center animate-fadeIn " style={{width:"1200px"}}>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Products Details</h2>
          
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
      >

        {selectedProduct.map((el) => (
         <SwiperSlide key={el.id} className=' relative text-center mb-6  bg-white p-1' style={{  maxWidth:"400px",borderRadius:'1.25rem' }}>
                 <div className='cardinner  ' >
                 <div className='box ' >
                   
                 <div className='img-holder'> 
                 <img src={el.img}  />
                 </div>
                 <div className='icon  '  >
                   <Link >
                  <a className='iconbox'  data-effect="spin">
                     <ArrowUpRight  color='white' size={35}/>
                     <span className="shimmer"></span>
                  </a>
                  </Link>
                 </div>
            
                  </div>
                 </div>
                 <div  className='flex flex-row items-center justify-between  gap-1'>
                 <div className='content text-left  py-3 uppercase  pl-3'>
                 <h3 className='text-black text-xl font-bold '>{el.name}</h3>
                 <div className='flex flex-row items-center'>
                 <p className='mt-2 text-sm  h-5 overflow-hidden' >{el.discription}</p></div>
        
               
                 <ul className='list-style'>
                   <li  className="branding">discription</li>
                   <li  className="packaging">packaging</li>
                 </ul>
                
                 </div>
               
                </div>
                 </SwiperSlide>
        
          ))}
         </Swiper>
           

            <div className="flex justify-center gap-4">
              <button
                onClick={closeModalHandler}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl transition"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      )}
{/* Modal */}


    <div className='flex flex-col items-center justify-start   w-full ml-6 gap-3'>
    <h2 className='text-4xl font-bold '>
    My Orders
    </h2>


 

<Loading loading={loading}  error={error} type={'table'}>
      {/* table */}
      

<div className="relative w-full overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
        <thead className="text-lg bg-blue-600 text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Order Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Items
                </th>
                
                <th scope="col" className="px-6 py-3">
                   Total Price
                </th>
            </tr>
        </thead>
        <tbody>
          {Orderslist.map((el) => (
            <tr key={el.id} className="bg-white border-b hover:bg-gray-100">
                <th scope="row" className="text-base px-6 py-4 font-medium  whitespace-nowrap text-gray-800">
                    {el.id}
                </th>
                <td className="px-6 py-4">
                   {el.items.length}{"Items /"}
                      <span
                    onClick={() => viewDetailsHandler(el.id)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Product Details
                  </span>
                </td>
              
                <td className="px-6 py-4 text-gray-900">
                    {el.subtotal}
                </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>
{/* {table} */}
</Loading>
    </div>
    </>
  )
}

export default Orders 
