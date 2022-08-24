import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import rubl from "../../assets/images/rubl.svg"
import { AuthFormWrapper, AuthLinks, AuthWrapper } from '../../styles'
import logocha from "../../assets/images/limongroup.svg"
import limon from "../../assets/images/limon.svg"
import authdots from "../../assets/images/authdots.png"
import Confirmation from './confirmation'
import AuthForm from './authForm'
import ForgotPassword from './forgotPassword'
const Auth = () => {

   const [isLogged, setIsLogged] = useState(false)
   const [icon, setIcon] = useState("password")
   const [passwordShown, setPasswordShown] = useState(false);
   const data = [
      {
         component: <Confirmation />,
         title: 'Confirmation',
      },
      {
         component: <AuthForm />,
         title: 'Authform',
      },
      {
         component: <ForgotPassword />,
         title: 'ForgotPassword',
      },
   ]
   const [activeMenu, setActiveMenu] = useState(0)
   return (
      <div className='row'>
         <div className="col-xl-6 bg-white col-lg-6 col-md-12 col-sm-12 col-12">
            <AuthWrapper className='pt-5  d-flex justify-content-center'>
               <div className="d-flex gap-2 align-items-center">
                  <img src={rubl} alt="" />
                  <p className='m-0 russkiy'>
                     Русский
                  </p>
               </div>


            </AuthWrapper>

            {data.map((item, index) => (
               <button
                  key={index}
                  className='mx-3 mb-3 btn btn-success'
                  onClick={() => setActiveMenu(index)}
               >
                  {item.title}
               </button>
            ))}
            {data[activeMenu].component}

            <AuthLinks className='d-flex justify-content-center'>
               <p className='mx-3'>Условия и положения</p>
               <p className='mx-3'>Побольше о нас</p>
               <p className='mx-3'>Свяжитесь с нами</p>

            </AuthLinks>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 collimon" style={{
            "backgroundImage": `url(${limon})`,
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover",
            "padding": "0 !important"
         }}>
            <div className='authInfo d-flex justify-content-center align-items-center flex-column px-2 w-100' style={{
               "backgroundImage": `url(${authdots})`,

            }}>
               <img src={logocha} alt="" />
               <h2 className="title mt-5">Быстро, Эффективно и Продуктивно</h2>
               <div className="px-5 mt-3">
                  <p className='px-5 text-center'>
                     Прогресс, которого ждали в течение двух-трёх лет, случился за <span>один год</span>. Количество приложений, которыми мы пользуемся ежедневно, <span>выросло на 30%</span>. Нажать кнопку в приложении и уже через час есть горячую пиццу <span>проще</span>, чем идти за ней в ресторан.
                  </p>
               </div>
            </div>
         </div>

      </div >
   )
}

export default Auth