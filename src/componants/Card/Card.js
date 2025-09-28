import React from 'react'
import "./card.css"
import "../Button/button.css"
import 'normalize.css';
import { ArrowUpRight } from 'lucide-react'
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Plus } from 'lucide-react';
import {addToCart} from '../../Redux/cart/cartSlice'
import { Heart } from 'lucide-react'
import Spinner from '../Spinner/Spinner';
import {actLikeToggle} from "../../Redux/wishlist/wishlistSlice"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Card = memo(({ cardCate  , name , price , discription , imgSrc  , id , max , quantity ,  isLike ,  isAuthenticated}) => {
const dispatch = useDispatch();

const currentRemainingQuantity = max - (quantity ?? 0)
const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
const [showModal, setShowModal] = useState(false);
const [isLoading , setisLoading] = useState(false);
  const addToCartHandler = () => {
    dispatch(addToCart(id));
    
  };
  const LikeToggleHandler = () => {
    if( isAuthenticated){
    if(!isLoading){  //if loading false customer cant make dislike while loading
        setisLoading(true);
    dispatch(actLikeToggle(id)).unwrap()
        .then(() => setisLoading(false))
        .catch(() => setisLoading(false));
    }
  }else {
        setShowModal(true);
      }
  }

const navigate = useNavigate();

  return (
  <>
 {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 text-center animate-fadeIn">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Login Required</h2>
            <p className="text-gray-700 mb-6">
                You need to login first to add this item to your wishlist.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate('/login')
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
              >
                LogIn
              </button>
            </div>
          </div>
        </div>
      )}






  <div className=' text-center mb-6  bg-white p-1 relative ' style={{  maxWidth:"400px",borderRadius:'1.25rem' }}>
        <div className='cardinner  ' >
        <div className='box ' >
          <div className='wishlistBtn flex items-center justify-center cursor-pointer shadow-xl rounded-md ' onClick={LikeToggleHandler}  >
            {isLoading? <Spinner/> : isLike ? <Heart size={30} color='black' />:<Heart size={30} color='red' /> }
          </div>
        <div className='img-holder'> 
        <img src={imgSrc}  />
        </div>
        
        <div className='icon  '    onClick={() => {
                  
                  navigate(`/ProductPage/${id}`)
                }} >
         <a className='iconbox'  data-effect="spin">
            <ArrowUpRight  color='white' size={35}/>
            <span className="shimmer"></span>
         </a>
         
        </div>
        <div className=' absolute font-medium top-3 left-3 px-4 py-2 bg-neutral-300 rounded-xl hover:bg-neutral-400 ' >{cardCate}</div> 
         </div>
        </div>
        <div  className='flex flex-row items-center justify-between  gap-1'>
        <div className='content text-left  py-3 uppercase  pl-3'>
        <h3 className='text-black text-xl font-bold '>{name}</h3>
        <div className='flex flex-row items-center'><p className='mt-2 text-sm  h-5 overflow-hidden' >{discription}</p><p className=' '>{`...`}</p></div>
        <p className={`maximumNotice text-lg`}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
        <ul className='list-style'>
          <li  className="branding">discription</li>
          <li  className="packaging">packaging</li>
        </ul>
       
        </div>
        <div className=' px-4 py-8     '   style={{ borderRadius:'1.25rem' , borderWidth:'3px' ,borderColor:"#ddd" }}>
       <button className='w-full flex items-center justify-center' 
       onClick={addToCartHandler}
       disabled={ quantityReachedToMax}
       >
         
       <Plus size={20} color={'#ddd'} />
       <ShoppingBag size={35} color='#770110' />
       </button>
       </div>
       </div>
        </div>
</>
    
  )
})

export default Card ;
