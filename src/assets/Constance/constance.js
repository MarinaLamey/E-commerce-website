
import hero1 from '../../assets/imgs/herosec1.webp'
import herosec2 from '../../assets/imgs/herosec2.webp'
import herosec3 from '../../assets/imgs/herosec3.webp'
import { ShoppingCartIcon } from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
import { Globe2 } from 'lucide-react'
import { BadgePoundSterling } from 'lucide-react'
import electronic from "../../assets/imgs/electronic.webp"
import makeup from "../../assets/imgs/make up.webp"
import health from "../../assets/imgs/make up.webp"
import womenF from "../../assets/imgs/women fashion2.jpg"
import menF from "../../assets/imgs/men1.webp"
import supermarket from "../../assets/imgs/supermarket.webp"
import laptop from "../../assets/imgs/laptop.png"
import lipstik from "../../assets/imgs/lipstik.png"
import iphone from "../../assets/imgs/iphone.png"
import huawie from '../../assets/imgs/huawie.png'
import kiko from "../../assets/imgs/Kiko.png"
import adidas from "../../assets/imgs/adidas.png"
import casio from "../../assets/imgs/casio.png"
import p1 from "../../assets/imgs/p1.png"
import p2 from "../../assets/imgs/p2.png"
import p3 from "../../assets/imgs/p3.png"

 export const heroSectionImgs = [
    {imgSrc:"../imgs/herosec1.webp" , imgalt:'Stylish Fashion Items'},
    {imgSrc: "../imgs/herosec2.webp" , imgalt:'All The Products You Need'},
    {imgSrc:"../imgs/herosec3.webp" , imgalt:'Fast Delivery For All Products' },
    {imgSrc:"../imgs/herosec3.webp", imgalt:'Fast Delivery For All Products' },

]

export const benefitsSection = [
    {beneIcon: <ShoppingCartIcon size={40} color='#771011'/> , benedisc:"Wide Product Selection"},
    {beneIcon: <ShieldCheck size={40} color='#771011'/> , benedisc:"Secure Payment Options"},
    {beneIcon: <Globe2 size={40} color='#771011'/> , benedisc:"Global And Local Shpping"},
    {beneIcon: <BadgePoundSterling size={40} color='#771011'/> , benedisc:"Exclusive Offers And Discounts"}
]

export const categoriesSection =[
    { id:0, imgSrc:"../imgs/herosec2.webp" , Categorie :"Electronics" } ,
    { id:1, imgSrc:'../imgs/make up.webp' , Categorie :"Beauty" } ,
    { id:3,  imgSrc:'../imgs/men1.webp' , Categorie :"Men Fashion" } ,
       { id:4, imgSrc:'../imgs/women fashion2.jpg' , Categorie :"women Fashion" } ,
    {id:5, imgSrc:'../imgs/supermarket.webp' , Categorie :"Supermarket" } 
]

export const flashSale = [
    {imgSrc:'../imgs/laptop.png' , price:"$600" ,heading:'Dell Vostro 3520 Laptop' , discription:"Dell Vostro 3520 Laptop, Intel Core i5-1235U, 512GB SSD, 8GB RAM, 15.6 Inch, FHD 120Hz Display, Intel UHD Graphics, Ubuntu - Carbon Black."},
    {imgSrc:'../imgs/iphone.png' , price:"$899 (128GB model)." ,heading:'iPhone 13 Pro Max' , discription:"iPhone 13 Pro Max features a stunning 6.7-inch Super Retina XDR display with ProMotion, the powerful A15 Bionic chip, a triple-camera system for pro-level photos and videos, and all-day battery life."},
    {imgSrc:"../imgs/lipstik.png" , price:"$29.99," ,heading:'Just Nature Essentials M.A.C' , discription:"Just Nature Essentials by M.A.C offers a collection of high-quality, nature-inspired makeup essentials, blending professional performance with clean, skin-friendly formulas."},
    
]

export const prands = [
    { imgsrc:"../imgs/huawie.png" , prandherf:'/'},
    { imgsrc:"../imgs/Kiko.png"  , prandherf:'/' } ,
    { imgsrc:"../imgs/adidas.png"  , prandherf:'/'},
    { imgsrc:"../imgs/casio.png"  , prandherf:'/'},
    { imgsrc:"../imgs/huawie.png"  , prandherf:'/'},
    { imgsrc:"../imgs/adidas.png"  , prandherf:'/'},
    { imgsrc:"../imgs/casio.png"  , prandherf:'/'},
    { imgsrc:"../imgs/huawie.png"  , prandherf:'/'},
]


export const loginImgs = [
    {id:0 , imgSrc:'../imgs/p1.png'},
    {id:1 , imgSrc:'../imgs/p2.png'},
    {id:2 , imgSrc:'../imgs/p3.png'},
    {id:0 , imgSrc:'../imgs/p1.png'},
    {id:1 , imgSrc:'../imgs/p2.png'},
    {id:2 , imgSrc:'../imgs/p3.png'}
]