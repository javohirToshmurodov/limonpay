import React from 'react'
import DefaultButton from '../../components/DefaultButton'

const NotFound = () => {
   return (
      <div className='container minheightContainer bg-white rounded shadow p-4 mt-4 d-flex justify-content-center align-items-center flex-column'>
         <h1 style={{
            "fontFamily": "Noto Sans, sans-serif ",
            "fontWeight": "700",
            "fontSize": "200px"
         }} className='notfound display-1 fw-bold'>404</h1>
         <p style={{
            "fontFamily": "Inter, sans-serif",
            "fontWeight": "600",
            "textAlign": "center"
         }}>
            Страница не найдена, попробуйте еще раз 😬
         </p>
         <div className="d-flex gap-3 notfoundd-flex">
            <DefaultButton route={"about"} title={"Попробовать еше раз"} />

            <DefaultButton route={""} title={"Вернутся домой"} />


         </div>
      </div>
   )
}

export default NotFound