
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
    {imgSrc:hero1 , imgalt:'Stylish Fashion Items'},
    {imgSrc: herosec2 , imgalt:'All The Products You Need'},
    {imgSrc:herosec3 , imgalt:'Fast Delivery For All Products' },
    {imgSrc:herosec3 , imgalt:'Fast Delivery For All Products' },

]

export const benefitsSection = [
    {beneIcon: <ShoppingCartIcon size={40} color='#771011'/> , benedisc:"Wide Product Selection"},
    {beneIcon: <ShieldCheck size={40} color='#771011'/> , benedisc:"Secure Payment Options"},
    {beneIcon: <Globe2 size={40} color='#771011'/> , benedisc:"Global And Local Shpping"},
    {beneIcon: <BadgePoundSterling size={40} color='#771011'/> , benedisc:"Exclusive Offers And Discounts"}
]

export const categoriesSection =[
    { id:0, imgSrc:herosec2 , Categorie :"Electronics" } ,
    { id:1, imgSrc:makeup , Categorie :"Beauty" } ,
    { id:3,  imgSrc:menF , Categorie :"Men Fashion" } ,
       { id:4, imgSrc:womenF , Categorie :"women Fashion" } ,
    {id:5, imgSrc:supermarket , Categorie :"Supermarket" } 
]

export const flashSale = [
    {imgSrc:laptop , price:"$600" ,heading:'Dell Vostro 3520 Laptop' , discription:"Dell Vostro 3520 Laptop, Intel Core i5-1235U, 512GB SSD, 8GB RAM, 15.6 Inch, FHD 120Hz Display, Intel UHD Graphics, Ubuntu - Carbon Black."},
    {imgSrc:iphone , price:"$899 (128GB model)." ,heading:'iPhone 13 Pro Max' , discription:"iPhone 13 Pro Max features a stunning 6.7-inch Super Retina XDR display with ProMotion, the powerful A15 Bionic chip, a triple-camera system for pro-level photos and videos, and all-day battery life."},
    {imgSrc:lipstik , price:"$29.99," ,heading:'Just Nature Essentials M.A.C' , discription:"Just Nature Essentials by M.A.C offers a collection of high-quality, nature-inspired makeup essentials, blending professional performance with clean, skin-friendly formulas."},
    
]

export const prands = [
    { imgsrc:huawie , prandherf:'/'},
    { imgsrc:kiko , prandherf:'/' } ,
    { imgsrc:adidas  , prandherf:'/'},
    { imgsrc:casio , prandherf:'/'},
    { imgsrc:huawie , prandherf:'/'},
    { imgsrc:kiko , prandherf:'/' } ,
    { imgsrc:adidas  , prandherf:'/'},
    { imgsrc:casio , prandherf:'/'},
]


export const loginImgs = [
    {id:0 , imgSrc:p1},
    {id:1 , imgSrc:p2},
    {id:2 , imgSrc:p3},
    {id:3 , imgSrc:p1},
    {id:4 , imgSrc:p2},
    {id:5 , imgSrc:p3}
]