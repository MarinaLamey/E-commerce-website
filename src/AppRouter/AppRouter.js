import React from 'react'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { lazy , Suspense } from 'react';
import LottieHandler from '../componants/feedback/LottieHandler/LottieHandler';
//protect Routs 
import ProtectedRoute from '../componants/Auth/ProtectedRoute.js';

//
const HomePage = lazy(() => import ("../pages/Home/HomePage"))
const ProfileLayout = lazy(() => import("../pages/MainLayout/ProfileLayout/ProfileLayout.js"))
const App = lazy(() => import("../pages/MainLayout/MainLayout/App.js"));
const LoginPage = lazy(() => import('../pages/Auth/LoginPage/LoginPage'));
const Register= lazy(() => import("../pages/Auth/Register/Register"));
const  AllCategories= lazy(() => import("../pages/AllCategories/AllCategories"));
const  AllBrands= lazy(() => import("../pages/AllBrands/AllBrands"));
const   ShopProducts = lazy(() => import("../pages/ShopProductsPage/ShopProducts"));
const ProductsByHomeSection = lazy(() => import("../pages/ProductsByHomeSection/ProductsByHomeSection.js"))
const   ProductPage = lazy(() => import("../pages/ProductPage/ProductPage.js"));
const OffersPage = lazy(() => import("../pages/OffersPage/OffersPage.js"))
const  Error = lazy(() => import('../pages/Error/Error'));
const  Cartpage = lazy(() => import('../pages/Cartpage/Cartpage'));
const  Wishlistpage = lazy(() => import('../pages/Wishlistpage/Wishlistpage'));
const ContactUs = lazy(() => import("../pages/Contactus/ContactUs.js"))
const Account = lazy(() => import ("../pages/Account/Account.js"))
const Orders  = lazy(() => import("../pages/Orders/Orders .js"))
const SearchPage = lazy(() => import ("../pages/SearchPage/SearchPage.js"))
//



const router = createBrowserRouter([
    {
        path:"/",
        element:(
        <Suspense fallback= {<div style={{ marginTop: "5%" }}><LottieHandler type={'Loading'} message={"loading please wait.."} /> </div> } > 

         < App/> </Suspense>    
      ),
        errorElement:<Error/>,
        children:[
            {
                index:true,
                 element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}> 
        <HomePage/></Suspense>    
      ),
            
            },

            {
                path:'login',
                element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
        <LoginPage/></Suspense>    
      ),
               
            },
            {
                path:'register',
                element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
       <Register/></Suspense>    
      ),
            },
            {
                path:'AllCategories',
                       element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
       <AllCategories/></Suspense>    
      ),
               
            },
            {
                path:'AllBrands',
                          element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
       <AllBrands/></Suspense>    
      ),
               
            },
            {
                path:'ShopProducts/:prefix',
                                  element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
       <ShopProducts/></Suspense>    
      ),
               
                loader: ({ params }) => {
                    if (
                      typeof params.prefix !== "string" ||
                      !/^[a-z]+$/i.test(params.prefix)
                    ) {
                      throw new Response("Bad Request", {
                        statusText: "Category not found",
                        status: 400,
                      });
                    }
                    return true;
                  },
               
            },{
              path:'ProductsByHomeSection/:secPrefix',
                                  element:(
        <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} > 
       <ProductsByHomeSection/></Suspense>    
      ),
            }
            ,
             {
                path:'Offers',
                element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                    <OffersPage/></Suspense>)
            }
            ,
             {
                path:'Cartpage',
                element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                    <Cartpage/></Suspense>)
            },
            {
            path:'wishlistpage',
             element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                   <Wishlistpage/></Suspense>)
         
            },
            {
                path:'ProductPage/:id',
                 element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                   <ProductPage/></Suspense>)
            },
            {
                path:'ContactUs',
                 element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                   <ContactUs/></Suspense>)
            },{
              path:'/search',
                 element:( <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />}>
                   <SearchPage/></Suspense>)
            },
            {
              path:"profile",
              element:(
                <ProtectedRoute>
                   <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} >
                   <ProfileLayout />
                    </Suspense>
                </ProtectedRoute>
              ),
          children:[
          {
            index: true,
            element: (
              <ProtectedRoute>
              <Suspense  fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} >
                <Account />
              </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "orders",
            element: (
              <ProtectedRoute>
              <Suspense fallback={<LottieHandler type={'Loading'} message={"loading please wait.."} />} >
                <Orders />
              </Suspense>
              </ProtectedRoute>
            ),
          },
              ]
            }
           

        ]
    }
])



const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter

