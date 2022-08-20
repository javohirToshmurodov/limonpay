import React from 'react'
import DefaultButton from '../DefaultButton'
import pillow from "../../assets/images/pillow.svg"
import { LayerWrapper } from '../../styles'
const LimonLayer = () => {
   return (
      <div className='container'>
         <div className="row align-items-center justify-content-center py-4">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-11">
               <LayerWrapper>
                  <h2>
                     О LimonPay
                  </h2>
                  <p>
                     Мы - онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана.

                  </p>
                  <p className=''>
                     Банковские депозиты на иных условиях возврата
                  </p>
                  <div className="mt-5">
                     <DefaultButton bg={
                        "#FFC007"
                     } route={"about"} title={"Подробнее"} />
                  </div>
               </LayerWrapper>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
               <div className='d-flex justify-content-center align-items-center'>
                  <img src={pillow} alt="" />
               </div>
            </div>

         </div>
      </div>
   )
}

export default LimonLayer