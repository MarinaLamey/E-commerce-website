import React from 'react'
import useProductsBysection from './useProductsBysection'
import MainVideo from '../../componants/MainVideo/MainVideo'
import CategoriesBar from '../../componants/CategoriesBar/CategoriesBar'
import TitlaandFilterationbar from '../../componants/TitleandFiltertionbar/TitlaandFilterationbar'
import SideFilter from '../../componants/SideFilter/SideFilter'
import Card from '../../componants/Card/Card'
import Loading from '../../componants/feedback/Loading/Loading'
import Gridlist from '../../componants/Gridlist/Gridlist'

const ProductsByHomeSection = () => {
 const {sortedProducts ,  loading , error} = useProductsBysection()
  return (
    <div className=' mx-auto relative   ' style={{minHeight:'700px'}} >
        <MainVideo/>
        <CategoriesBar/>
          <div className='w-full h-full px-20 mx-auto flex flex-col    ' >
          <TitlaandFilterationbar title={'500'} />
          <div className=' w-full flex flex-row gap-3 '>
           <SideFilter/>
    <div className='w-3/4  py-5 flex flex-col  gap-2 p-2  rounded-lg'  style={{minHeight:'600px' , backgroundColor:'#fff'}}>
    <Loading loading={loading} error={error}   type={'product'} >
      <Gridlist emptymessage={"There are no products"}  records={sortedProducts || []} renderItem={(record) => <Card key={record.id} {...record}/> } ></Gridlist>
    </Loading>  
      </div>
          </div>
          </div>
    </div>
  )
}

export default ProductsByHomeSection 
