import React from 'react'
import useCategories from '../../hooks/useCategories';
import Pagination from '../../componants/Pagination/Pagination'
import { useParams } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Category from '../../componants/Category/Category';
import Loading from '../../componants/feedback/Loading/Loading';
import Gridlist from '../../componants/Gridlist/Gridlist';

const AllCategories = () => {
const {records , loading , error} = useCategories();

  return (
    <div className='container mx-auto relative  p-10 ' style={{minHeight:'800px'}} >
     
       <div className='w-full flex flex-wrap   items-center  justify-between gap-3' >
       <Loading loading={loading} error={error} type={'category'} >
        <Gridlist records={records}  renderItem={(record) => 
            <Category {...record} ></Category>
        } >

        </Gridlist>
        </Loading>
        
          </div>
         
    </div>
  )
}

export default AllCategories
