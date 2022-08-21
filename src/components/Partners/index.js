import React from 'react'
import { partners } from '../../assets/images'
import Slider from 'react-slick'
import { PartnersCard } from '../../styles'
const Partners = () => {
   const { Uic, Express, Brocoli, Black, Belissimo, Artel } = partners
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows: false
   };
   const settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: -1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows: false
   };
   const data = [
      {
         image: `${Uic}`,
      },
      {
         image: `${Express}`,
      },
      {
         image: `${Brocoli}`,
      },
      {
         image: `${Black}`,
      },
      {
         image: `${Belissimo}`,
      },
      {
         image: `${Artel}`,
      },

   ]
   const data2 = [
      {
         image: `${Express}`,
      },
      {
         image: `${Artel}`,
      },
      {
         image: `${Uic}`,
      },
      {
         image: `${Belissimo}`,
      },
      {
         image: `${Black}`,
      },
      {
         image: `${Brocoli}`,
      },
   ]
   return (
      <div className=''>
         <div>
            <Slider {...settings}>
               {
                  data.map((item, index) => <div key={index} className='' style={{
                     "width": "50% !important"
                  }}>
                     <PartnersCard >
                        <img src={item.image} alt="" />
                     </PartnersCard>
                  </div>)
               }
            </Slider>
         </div>
         <div className="">
            <Slider {...settings2}>
               {
                  data2.map((item, index) => <div key={index} className='col-3' style={{
                     "width": "50% !important"
                  }}>
                     <PartnersCard >
                        <img src={item.image} alt="" />
                     </PartnersCard>
                  </div>)
               }
            </Slider>
         </div>
      </div>
   )
}

export default Partners