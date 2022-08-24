import React, { useState } from 'react'
import DefaultButton from '../../components/DefaultButton'
import phone from "../../assets/images/iphone.svg"
import dots from "../../assets/images/dot.svg"
import halfcircle from "../../assets/images/halfcircle.svg"
import { images } from '../../assets/images'
import { AppStoreCard, AppStoreLayer, CardWrapper, DefaultH2, LimonCards, PaymentCard, PaymentMiniCards } from '../../styles'
import LimonLayer from '../../components/Limonlayer'
import { CurrencyCard } from '../../styles'
import uzb from "../../assets/images/uzb.svg"
import usa from "../../assets/images/usa.svg"
import Exchange from '../../components/Exchange'
import bank1 from "../../assets/images/banknote.svg"
import bank2 from "../../assets/images/banknote2.svg"
import { countries } from '../../assets/images'
import { AiFillApple, AiFillStar, AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import PayButton from '../../components/PaymentButton'
import { IoIosWater } from "react-icons/io"
import { GiElectric, GiWarpPipe } from "react-icons/gi"
import { RiFireFill, RiGlobalLine } from "react-icons/ri"
import { HiOutlineTicket } from "react-icons/hi"
import earth from "../../assets/images/earth.svg"
import { FaGamepad, FaGooglePlay, FaProjectDiagram, FaTrash, FaTv, FaUmbrella } from 'react-icons/fa'
import FormButton from '../../components/FormButton'
import CategoryCard from '../../components/CategoryCard'
import dotss from "../../assets/images/dotss.svg"
import appstore from "../../assets/images/appstore.svg"
import google from "../../assets/images/googleplay.svg"
import subs from "../../assets/images/substracttsvg.svg"
import iphone2 from "../../assets/images/iphone2.svg"
import { cardimages } from '../../assets/images'
import card1 from "../../assets/images/card1.svg"
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'
import bank from "../../assets/images/bank.svg"
import Header from '../../components/Navbar'
const Home = () => {
   const { One, Two, Three } = images
   const { Card1, Card2, Card3, Card4 } = cardimages
   const { Usd,
      Eur,
      Jap,
      Gbr,
      Shvet,
      Rubl } = countries
   const cards = [
      {
         avatar: `${One}`,
         title: "Мониторинг",
         description: "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана."
      },
      {
         avatar: `${Two}`,
         title: "Удобные переводы",
         description: "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана."
      },
      {
         avatar: `${Three}`,
         title: "Мониторинг",
         description: "Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана."
      },
   ]
   const categories = [
      {
         icon: <RiGlobalLine />,
         title: "Интернет-провайдеры"
      },
      {
         icon: <FaTv />,
         title: "Телевидение и онлайн-вещание"
      },
      {
         icon: <FaUmbrella />,
         title: "Страхование"
      },
      {
         icon: <FaGamepad />,
         title: "Игры и социальные сети"
      },
      {
         icon: <FaProjectDiagram />,
         title: "Хостинг- провайдеры"
      },
      {
         icon: <HiOutlineTicket />,
         title: "Авиа- и ЖД-билеты"
      },
   ]
   const paymentcards = [
      {
         image: `${Card1}`,
         title: "LimonPay теперь также осуществляет денежн...",
         desc: "Сеть UnionPay менее развита в Европе, чем Visa и Mastercard. На практике ее карты могут прини...",
         date: "23 Января, 2022"
      },
      {
         image: `${Card2}`,
         title: "В Uzcard сменились учредители – Газета.uz",
         desc: "Сеть UnionPay менее развита в Европе, чем Visa и Mastercard. На практике ее карты могут прини...",
         date: "23 Января, 2022"
      },
      {
         image: `${Card3}`,
         title: "LimonPay теперь также осуществляет денежн...",
         desc: "Сеть UnionPay менее развита в Европе, чем Visa и Mastercard. На практике ее карты могут прини...",
         date: "23 Января, 2022"
      },
      {
         image: `${Card4}`,
         title: "Агробанк» объявил о разработке кобейджин...",
         desc: "Сеть UnionPay менее развита в Европе, чем Visa и Mastercard. На практике ее карты могут прини...",
         date: "23 Января, 2022"
      },

   ]

   const appClick = () => {
      window.open("https://www.apple.com/ru/app-store/")
   }
   const googleClick = () => {
      window.open("https://play.google.com/store/games?hl=ru&gl=US")
   }
   return (
      <>
         {/* <Header /> */}

         <div className='homebackground' style={{
            "background": "#17171C",
            "backgroundImage": `url(${dots}), url(${halfcircle})`,
            "backgroundRepeat": "no-repeat, no-repeat",
            "backgroundPosition": "75px 300px, right bottom"
         }}>
            <div className="linehr"></div>
            <div className="container py-5 text-white" style={{ "fontFamily": "Space Grotesk, sans-serif" }}>

               <div className="row pt-2 justify-content-center position-relative">
                  <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-8 col-md-8 col-sm-12 col-11">
                     <h1 style={{
                        "fontWeight": "700",
                        "fontSize": "48px",
                        "lineHeight": "61px"
                     }}>Enjoy and pay from lemon <span style={{ "color": "#32B141" }}>:)</span></h1>

                     <p style={{
                        "fontFamily": "Noto Sans, sans-serif",
                        "fontWeight": "400",
                        "lineHeight": "1.5",
                        "fontSize": "16px",
                        "maxWidth": "651px",
                        "marginTop": "32px"
                     }} className={""}>
                        Мы — онлайн-экосистема, основанная на финансовых и лайфстайл-услугах. Клиентами LimonPay стали 19 млн человек по всей Узбекистана.
                     </p>
                     <p style={{
                        "fontFamily": "Noto Sans, sans-serif",
                        "fontWeight": "400",
                        "lineHeight": "1.5",
                        "fontSize": "16px",
                        "maxWidth": "651px"
                     }}>
                        LimonPay третий крупнейший банк страны по количеству активных клиентов.
                     </p>
                     <div style={{
                        "marginTop": "40px"
                     }} className='d-flex gap-3 notfoundd-flex'>
                        <DefaultButton title={"Подробнее"} route={
                           "about"
                        } />
                        <DefaultButton title={"Войти в кабинет"} route={
                           ""
                        } />
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12">
                     <div>
                        <img className='phoneposition' src={phone} alt="" />
                     </div>
                  </div>

               </div>

            </div>

         </div>
         <div className="yellowline"></div>
         <div className='bg-white'>
            <div className="container py-5">
               <div className="row align-items-center justify-content-center">

                  {
                     cards.map((e, i) => <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-9' key={i}>
                        <CardWrapper>

                           <img src={e.avatar} alt="" />
                           <h2 className='mt-4'>{e.title}</h2>
                           <p>
                              {e.description}
                           </p>
                        </CardWrapper>
                     </div>)
                  }

               </div>
            </div>
         </div>
         <div style={{ "background": "#F8F8FA" }}>
            {/* <LimonLayer /> */}
         </div>

         <div className="bg-white py-5">
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap ">
                  <div>
                     <h2 style={{
                        "color": "#17171C",
                        "fontWeight": "700",
                        "lineHeight": "33px",
                        "fontSize": "24px"

                     }} className={"marginlefth1"}>Курс валют</h2>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                     <p style={{ 'color': "#A5AAB4", "fontSize": "16px", "fontFamily": "Noto Sans", "fontWeight": "500" }} className="m-0">На основе:</p>
                     <img src={bank} alt="" />
                  </div>
               </div>
               <div className="row  justify-content-center ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-11">
                     <CurrencyCard className='mt-3'>
                        <div className="row align-items-center justify-content-center">
                           <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                              <div className='d-flex flex-column'>
                                 <div className="d-flex justify-content-between">

                                    <input className='w-50' placeholder='0' type="text" />
                                    <div className='d-flex gap-2 align-items-center' style={{

                                       "fontWeight": "700",
                                       "fontSize": "20px",
                                       "lineHeight": "27px",
                                       "fontFamily": "Noto Sans, sans-serif"
                                    }}>
                                       <img src={usa} alt="" />
                                       UZS
                                    </div>
                                 </div>
                                 <div style={{
                                    "background": "#E6E9EF",
                                    "height": '2px',
                                    "width": "100%"
                                 }}></div>
                              </div>
                           </div>
                           <div className="col-xl-2 d-flex justify-content-center col-lg-2 col-md-12 col-sm-12 col-4 ">
                              <Exchange />
                           </div>
                           <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">

                              <div className='d-flex flex-column'>
                                 <div className="d-flex justify-content-between">
                                    <input className='w-50' placeholder='0' type="text" />
                                    <div className='d-flex gap-2 align-items-center' style={{

                                       "fontWeight": "700",
                                       "fontSize": "20px",
                                       "lineHeight": "27px",
                                       "fontFamily": "Noto Sans, sans-serif"
                                    }}>
                                       <img src={uzb} alt="" />
                                       UZS
                                    </div>

                                 </div>
                                 <div style={{
                                    "background": "#E6E9EF",
                                    "height": '2px',
                                    "width": "100%"
                                 }}></div>
                              </div>
                           </div>

                        </div>
                        <div className="d-flex mt-4 gap-2 align-items-center">
                           <img src={bank1} alt="" />
                           <p className='' style={{
                              "fontWeight": "600",
                              "fontSize": "14px",
                              "margin": "0"
                           }}>
                              1 USD = 11 150 UZS
                           </p>
                        </div>
                        <div className="d-flex mt-2 gap-2 align-items-center">
                           <img src={bank2} alt="" />
                           <p className='' style={{
                              "fontWeight": "600",
                              "fontSize": "14px",
                              "margin": "0"
                           }}>
                              Курс автоматически обновляется каждые 10 минут
                           </p>
                        </div>
                     </CurrencyCard>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-11">
                     <CurrencyCard className='mt-3'>
                        <div className="row align-items-center justify-content-center">
                           <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="d-flex gap-2">
                                    <img src={Usd} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>USD</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>11 150.14</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='dangertext'>-15.78</p>
                                    <AiOutlineArrowDown color='#F75555' />
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                 <div className="d-flex gap-2">
                                    <img src={Eur} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>EUR</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>11 567.16</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='dangertext'>-75.54</p>
                                    <AiOutlineArrowDown color='#F75555' />
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mt-3 marginbottom">
                                 <div className="d-flex gap-2">
                                    <img src={Rubl} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>RUB</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>172.50</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='successtext'>-75.54</p>
                                    <AiOutlineArrowUp color='#32B141' />
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                              <div className="d-flex justify-content-between align-items-center margintopmedia">
                                 <div className="d-flex gap-2">
                                    <img src={Gbr} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>GBP</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>13 577.53</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='dangertext'>-30.38</p>
                                    <AiOutlineArrowDown color='#F75555' />
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                 <div className="d-flex gap-2">
                                    <img src={Jap} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>JPY</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>86.54</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='dangertext'>-0.2</p>
                                    <AiOutlineArrowDown color='#F75555' />
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mt-3">
                                 <div className="d-flex gap-2">
                                    <img src={Shvet} alt="" />
                                    <div>
                                       <h6 style={{
                                          "fontWeight": "700",
                                          "fontSize": "16px",
                                          "lineHeight": "22px",
                                          "color": "#17171C"
                                       }} className='m-0'>CHF</h6>
                                       <p
                                          style={{
                                             "color": "#A5AAB4",
                                             "fontWeight": "600",
                                             "fontSize": "12px",
                                             "lineHeight": "16px"
                                          }}
                                          className='m-0'>11 135.66</p>
                                    </div>
                                 </div>
                                 <div className='d-flex'>
                                    <p className='dangertext'>-77.35</p>
                                    <AiOutlineArrowDown color='#F75555' />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </CurrencyCard>
                  </div>

               </div>
            </div>
         </div>
         <div className="" >
            <div className="">
               <div className="">
                  <div className="row">
                     <div style={{
                        "background": "#F8F8FA"
                     }} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 py-5 px-5">
                        <div style={{
                           "padding": "0 30px"
                        }} className="container">
                           <PaymentCard >
                              <h2>
                                 Коммунальные услуги
                              </h2>
                              <div className="row align-items-center">
                                 <div className="mt-3 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-10">
                                    <div className="mt-2">
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<IoIosWater />} bg={"#29A7EE"} />
                                          <p className='m-0'>Холодная вода</p>
                                       </PaymentMiniCards>
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<GiElectric />} bg={"#FAC131"} />
                                          <p className='m-0'>Электричество</p>
                                       </PaymentMiniCards>
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<IoIosWater />} bg={"#FA8231"} />
                                          <p className='m-0'>Горячая вода</p>
                                       </PaymentMiniCards>
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<FaTrash />} bg={"#32B141"} />
                                          <p className='m-0'>Мусор</p>
                                       </PaymentMiniCards>
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<RiFireFill />} bg={"#F75555"} />
                                          <p className='m-0'>Газ</p>
                                       </PaymentMiniCards>
                                       <PaymentMiniCards className='align-items-center gap-3'>
                                          <PayButton icon={<GiWarpPipe />} bg={"#323FB1"} />
                                          <p className='m-0'>Канализация</p>
                                       </PaymentMiniCards>
                                    </div>
                                 </div>
                                 <div className="mt-3 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-10">
                                    <div className='d-flex justify-content-center align-items-center'>
                                       <img src={earth} className={"img-fluid"} alt="" />
                                    </div>
                                 </div>
                              </div>
                           </PaymentCard>
                        </div>
                     </div>
                     <div style={{ "background": "#EFF1F5" }} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 py-5 px-5">
                        <div style={{ "padding": "0 30px" }} className="container">
                           <PaymentCard>
                              <h2>
                                 Экспресс оплата
                              </h2>

                              <div className='mt-4'>
                                 <label htmlFor="input1">
                                    <p className='label mb-2'>Номер телефона</p>
                                 </label>
                                 <div>
                                    <input id="input1" type="tel" placeholder='+998 (__)___-__-__' />
                                 </div>

                                 <div className='mt-4'>
                                    <label htmlFor="input1">
                                       <p className='label mb-2'>Сумма платежа</p>
                                    </label>
                                    <div>
                                       <input id="input1" type="tel" placeholder='10 000' />
                                    </div>
                                    <div className="mt-5">
                                       <FormButton title={"Оплатить"} color={"#FFC007"} />
                                    </div>
                                 </div>
                              </div>
                           </PaymentCard>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >
         <div className="py-5 bg-white">
            <div className="container">
               <div className="d-flex justify-content-between dflexcategory align-items-center">
                  <h2 className='defaulth2'>Другие категории</h2>
                  <h4 className='allcategory'>Все категории</h4>
               </div>
               <div className="row justify-content-center">
                  {
                     categories.map((item, index) => <CategoryCard title={item.title}
                        icon={item.icon}
                     />)
                  }
               </div>
            </div>
         </div>
         <div className="">

            <div className="container">
               <div className="bg-image" style={{
                  "backgroundImage": `url(${dotss})`,
                  "minHeight": "160px",
                  "backgroundRepeat": "no-repeat"
               }}>

               </div>
               <div className="row py-2 backgroundrow position-relative" style={{
                  "backgroundImage": `url(${subs})`,
                  "backgroundRepeat": "no-repeat",
                  "backgroundPosition": "right"
               }}>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                     <AppStoreLayer>
                        <h2 className='white-sm'>
                           Загрузите приложение для
                           своего устройства
                        </h2>
                        <p className='white-sm'>
                           Приложение поддерживает системы iOS, Android.
                        </p>
                        <div className="d-flex gap-3 ">
                           <img onClick={() => appClick()} src={appstore} alt="" />
                           <img onClick={() => googleClick()} src={google} alt="" />

                        </div>
                     </AppStoreLayer>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                     <div>
                        <img src={iphone2} alt="" className="img-fluid positioniphone" />
                     </div>
                  </div>

               </div>
               <div className="row py-5 align-items-center justify-content-center">
                  <div className="col-xl-6 col-lg-6 col-md-10 col-sm-11 col-11 mt-2 paddingstore" style={{

                  }}>
                     <AppStoreCard>
                        <div className="d-flex justify-content-between">
                           <div className='icon'>
                              <AiFillApple />
                           </div>
                           <div className='stars gap-1 d-flex'>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>

                           </div>
                        </div>
                        <div className="d-flex mt-5 align-items-end justify-content-between">
                           <div className='reyting'>
                              <p>Рейтинг в</p>
                              <h5>App Store</h5>
                           </div>
                           <div className="reytingson">
                              <h1>
                                 4,6
                                 <span>из 5</span>
                              </h1>
                           </div>
                        </div>
                     </AppStoreCard>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-10 col-sm-11 col-11 mt-2 paddingstore" style={{

                  }}>
                     <AppStoreCard>
                        <div className="d-flex justify-content-between">
                           <div className='icon'>
                              <FaGooglePlay />
                           </div>
                           <div className='stars gap-1 d-flex'>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>
                              <div>
                                 <AiFillStar />
                              </div>

                           </div>
                        </div>
                        <div className="d-flex mt-5 align-items-end justify-content-between">
                           <div className='reyting'>
                              <p>Рейтинг в</p>
                              <h5>Google Play</h5>
                           </div>
                           <div className={"reytingson"}>
                              <h1>
                                 4,8
                                 <span>из 5</span>
                              </h1>
                           </div>
                        </div>
                     </AppStoreCard>
                  </div>

               </div>
            </div>
         </div>
         <div className='bg-white py-5' id="section">
            <div className="container">
               <DefaultH2 className='pb-2'>
                  Новости
               </DefaultH2>

               <div className="row justify-content-center align-items-center">
                  {
                     paymentcards.map((e, i) => <div className='col-xl-3 mt-3 col-lg-4 col-md-6 col-sm-8 col-10' key={i}>
                        <LimonCards>
                           <img className='img-fluid' src={e.image} alt="" />
                           <div className="px-3">
                              <h4>{e.title}</h4>
                              <p className='desc'>
                                 {e.desc}
                              </p>
                              <p className='date'>
                                 {e.date}
                              </p>
                           </div>
                        </LimonCards>
                     </div>)
                  }

               </div>
            </div>
         </div>
         <div className="py-5">
            <div className="container">
               <DefaultH2 className='mb-4'>Партнеры</DefaultH2>
            </div>
            <Partners />
         </div>
         <Footer />
      </>
   )
}

export default Home