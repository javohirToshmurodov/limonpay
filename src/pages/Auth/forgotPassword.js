import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { AuthFormWrapper } from '../../styles'

const ForgotPassword = () => {
   const [icon, setIcon] = useState("text")
   const [passwordShown, setPasswordShown] = useState(false);
   const [passwordShown1, setPasswordShown1] = useState(false);
   const [icon1, setIcon1] = useState("text")
   const [color, setColor] = useState("")
   const [ln, setLn] = useState(0)
   const togglePassword = () => {
      setPasswordShown(!passwordShown);
      if (passwordShown) {
         setIcon("text")
      } else {
         setIcon("password")
      }
   };
   const togglePassword1 = () => {
      setPasswordShown1(!passwordShown1);
      if (passwordShown1) {
         setIcon1("text")
      } else {
         setIcon1("password")
      }
   };
   const handleInput = ({ target: { value } }) => {
      let length = value.length
      setLn(length)
      if (length <= 2) {
         setColor('red')
      } else if (length <= 4) {
         setColor('yellow')
      } else if (length <= 6) {
         setColor('orange')
      } else if (length <= 8) {
         setColor('green ')
      }
   }
   const handleSetting = (e) => {
      e.preventDefault()
   }
   return (
      <div>
         <AuthFormWrapper className='d-flex justify-content-center align-items-center flex-column'>
            <h2>
               Установка пароля
            </h2>
            <p>
               Войдите используя свой логин и пароль
            </p>

            <form onSubmit={handleSetting} className='forgotform d-flex justifyc-content-center  flex-column'>
               <div className="position-relative d-block">
                  <label htmlFor="parol" className="label">Пароль</label>
                  <div>
                     <input autoComplete="on" onChange={(e) => handleInput(e)} id="parol" className='input' type={passwordShown ? "text" : "password"} placeholder='Введите надежный пароль' />
                     {
                        icon == "password" ? <BsEye onClick={togglePassword} className='eyes' /> : <BsEyeSlash onClick={togglePassword} className="eyes" />
                     }
                  </div>

               </div>
               <div className="d-flex justify-content-between mt-3" style={{
                  "justifyContent": "space-between !important"
               }}>
                  <div style={{
                     "background": `${ln >= 2 ? color : ''}`
                  }} className="settingsline"></div>
                  <div style={{
                     "background": `${ln >= 4 ? color : ''}`
                  }} className="settingsline"></div>
                  <div style={{
                     "background": `${ln > 6 ? color : ''}`
                  }} className="settingsline"></div>
                  <div style={{
                     "background": `${ln > 8 ? color : ''}`
                  }} className="settingsline"></div>
               </div>
               <div className="position-relative d-block">
                  <label htmlFor="parol2" className="label mt-3">Подвердите пароль</label>
                  <div className="div">
                     <input id='parol2' className='input' type={passwordShown1 ? "text" : "password"} placeholder='Введите надежный пароль' />
                     {
                        icon1 == "password" ? <BsEye onClick={togglePassword1} className='eyes' /> : <BsEyeSlash onClick={togglePassword1} className="eyes" />
                     }
                  </div>
               </div>

               <div className='d-flex w-100 justify-content-between mt-3'>
                  <div>
                     <div className='disabledbutton' disabled>
                        Отмена
                     </div>
                  </div>
                  <div>

                     <button className='forgotbutton'>
                        Продолжить
                     </button>
                  </div>
               </div>
            </form>
         </AuthFormWrapper>
      </div>
   )
}

export default ForgotPassword