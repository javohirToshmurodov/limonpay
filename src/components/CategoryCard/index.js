import React from 'react'
import { CategoryCardWrapper } from '../../styles'

const CategoryCard = (props) => {
   return (
      <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8 mt-3'>
         <CategoryCardWrapper className='position-relative'>
            <div className="icon">
               {props.icon}
            </div>
            <p>
               {props.title}
            </p>
            <div className="categoryline"></div>
         </CategoryCardWrapper>
      </div>
   )
}

export default CategoryCard