import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import smartphone from "../../assets/images/smartphone.svg"
import { AuthFormWrapper } from '../../styles'
import pencil from "../../assets/images/pencil.svg"
const Confirmation = () => {
   return (
      <AuthFormWrapper className='d-flex flex-column justify-content-center align-items-center'>
         <div>
            <img src={smartphone} alt="" />
         </div>

         <h1>Подвердите номер</h1>
         <p className='p'>Введите код подтверждения отпрвленный на номер</p>

         <div className="mb-3">
            <div className='d-flex' style={{
               "background": "#F3F5F8",
               "borderRadius": "6px",
               "overflow": "hidden",
               "boxSizing": "border-box"

            }}>
               <div style={{ "padding": "6px 10px", "fontFamily": "Roboto", "fontWeight": "600", "fontSize": "18px", "fontStyle": "normal" }}>
                  +998 (71) 200 70 07
               </div>

               <div className='d-flex justify-content-center align-items-center' style={{
                  "padding": "6px",
                  "background": "rgba(131, 144, 166, 0.2)"
               }}>
                  <img src={pencil} alt="" />
               </div>
            </div>
         </div>
         <div className="form">
            <label className='label mb-3' htmlFor="">Type your 6 digit security code</label>
            <div className="div d-flex gap-3">
               <input maxLength={"1"} className='confirmationinput' type="text" />
               <input maxLength={"1"} className='confirmationinput' type="text" />
               <input maxLength={"1"} className='confirmationinput' type="text" />
               <input maxLength={"1"} className='confirmationinput' type="text" />
               <input maxLength={"1"} className='confirmationinput' type="text" />
               <input maxLength={"1"} className='confirmationinput' type="text" />

            </div>
            <div className="text-center w-100">
               <button className='confirmationButton mt-4'>
                  Подтвердить
               </button>
            </div>
         </div>
      </AuthFormWrapper>
   )
}

export default Confirmation