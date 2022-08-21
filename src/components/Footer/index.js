import React from 'react'
import { FooterWrapper } from '../../styles'
import logo from "../../assets/images/logo.svg"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs"
import appstore from "../../assets/images/appstore.svg"
import google from "../../assets/images/googleplay.svg"
import footerlogo from "../../assets/images/footerlogo.svg"
const Footer = () => {

   const appClick = () => {
      window.open("https://www.apple.com/ru/app-store/")
   }
   const googleClick = () => {
      window.open("https://play.google.com/store/games?hl=ru&gl=US")
   }
   return (
      <footer className='mt-5 pt-4 d-flex align-items-center flex-column' style={{
         "background": "#2B2B30"
      }}>
         <div className="container">
            <FooterWrapper className='justify-content-center d-flex flex-column '>
               <div className="d-flex row py-1 justify-content-between  ">
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12  mt-3 pb-2 ">
                     <div>
                        <img src={logo} alt="" />
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12 mt-3 pb-2 justifycontentcenterfooter">
                     <div className="d-flex flex-wrap align-items-center justifycontentcenterfooter justify-content-between">
                        <div className=" justifycontentcenterfooter  location d-flex align-items-center  gap-2">
                           <div>
                              <HiOutlineLocationMarker size={"20px"} style={{
                                 "color": "#32B141"
                              }} />
                           </div>
                           <div>
                              <p className='text-white m-0'>122/1 Mirzo Ulug‘bek ko'chasi, Tashkent, Uzbekistan 100015</p>
                           </div>
                        </div>
                        <div className=" justify-content-end  justifycontentcenterfooter    tex d-flex phone  gap-2 align-items-center">
                           <div>
                              <BsTelephone size={"20px"} color='#32B141' />
                           </div>
                           <div>
                              <p className='m-0 text-white'>+998 78 200 00 07</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="py-3">
                  <div className="hrfooter"></div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-3">
                     <div className="title mb-3">О сервисе</div>
                     <ul>
                        <li>О компании</li>
                        <li>О возможностях приложения</li>
                        <li>Новости</li>
                        <li>Безопасность</li>
                        <li>Тарифы</li>

                     </ul>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-3">
                     <div className="title mb-3">Партнёрам</div>
                     <ul>
                        <li>Как стать партнером?</li>
                        <li>Автоматизация бизнеса</li>
                        <li>Выгоды </li>
                        <li>Интеграции платежной системы</li>
                     </ul>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-3">
                     <div className="title mb-3">Помощь</div>
                     <ul>
                        <li>Публичная оферта</li>
                        <li>Часто задаваемые вопросы</li>
                        <li>Обратная связь</li>
                     </ul>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mt-3">
                     <div className="title mb-3">Скачайте приложение:</div>
                     <ul>
                        <li>

                           <img onClick={() => appClick()} src={appstore} alt="" />
                        </li>
                        <li>

                           <img onClick={() => googleClick()} src={google} alt="" />
                        </li>
                     </ul>

                  </div>
               </div>
            </FooterWrapper>
         </div>
         <div className="layer pt-3 pb-4 w-100" style={{
            "background": "#FFC007"
         }}>
            <div className="container">
               <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className='mt-2'>
                     <p className='footerp m-0'>© ООО LimonPay. Все права защищены.</p>
                  </div>
                  <div className='d-flex mt-2'>
                     <p className='m-0 logop'>
                        Created by:
                     </p>
                     <img src={footerlogo} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer