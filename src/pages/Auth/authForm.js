import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { AuthFormWrapper } from '../../styles'

const AuthForm = () => {
   const [icon, setIcon] = useState("text")
   const [isLogged, setIsLogged] = useState(false)
   const [passwordShown, setPasswordShown] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault()
   }
   const togglePassword = () => {
      setPasswordShown(!passwordShown);
      if (passwordShown) {
         setIcon("text")
      } else {
         setIcon("password")
      }
   };
   return (
      <div>
         <AuthFormWrapper className='d-flex justify-content-center align-items-center flex-column'>
            <h2>
               Авторизация
            </h2>
            <p>
               Войдите используя свой логин и пароль
            </p>

            <form onSubmit={handleSubmit} className='d-flex justifyc-content-center align-items-center flex-column'>

               <input className='input' defaultValue={'+998'} type="tel" maxLength={"13"} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder='Введите номер телеофна пользователя' />

               {
                  isLogged ? <>

                     <div className="formGroup position-relative">

                        <input className='input mt-3' type={passwordShown ? "text" : "password"} placeholder='Введите пароль' />
                        {
                           icon == "password" ? <BsEye onClick={togglePassword} className='eyes' /> : <BsEyeSlash onClick={togglePassword} className="eyes" />
                        }
                     </div>
                     <div className="w-100">
                        <p className='text-end forgotpassword'>Забыли пароль?</p>
                     </div>
                     <button type='submit'>Войти</button>
                  </>
                     : <div className='text-start w-100  mt-3'>
                        <div className='d-flex align-items-center gap-2'>

                           <Form.Check id='check' />
                           <label className='loggedlabel' htmlFor="check">Я ознакомлен и согласен <span style={{ "color": "#32B141" }} > с условиями пользования</span></label>
                        </div>
                        <button className='mt-3' type='submit'>Зарегистрироваться</button>
                     </div>
               }

            </form>
         </AuthFormWrapper>
      </div >
   )
}

export default AuthForm