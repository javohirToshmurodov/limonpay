import styled from "styled-components";

export const DefaultButtonWrapper = styled.button`
color: #17171C;
font-weight: 600;
font-size: 14px !important;
line-height: 19px;
font-family: Noto Sans, sans-serif;
text-align: center;
padding: 12px 5px;
background: #FFFFFF;
border: 1px solid #E6E9EF;
border-radius: 8px;
width: 197px;
transition: all .4s ease-in-out;
&:hover{
   background-color: #FFC007;
   border: 1px solid #FFC007;
}
`
export const CardWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
h2{
   font-weight: 700;
font-size: 24px;
line-height: 33px;
color: #17171C;
}
p{
   font-weight: 400;
font-size: 14px;
line-height: 1.3;
color: #A5AAB4;
}
img{
   max-height:  118.96px;
}
`
export const LayerWrapper = styled.div`
h2{
   color: #17171C;
   font-weight: 700 !important; 
font-size: 32px;
line-height: 44px;
font-family: 'Noto Sans' , sans-serif;
}
p{
   color: #2B2B30;
   font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
}
`

export const CurrencyCard = styled.div`
min-height: 186px;
background: #F8F8FA;
border-radius: 12px;
padding: 20px;
input{
   border: none;
   background: transparent;
   outline: none;
   font-weight: 700;
font-size: 36px;
line-height: 49px;
font-family: 'Noto Sans';
color: #A5AAB4;
}

`
export const PaymentCard = styled.div`
h2{
   font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
color: #17171C;
}
p{
   font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 11px;
color: #17171C;

}
.label{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
}
input{
   background: #F8F8FA;
/* Main/Stroke */

border: 1px solid #E6E9EF;
border-radius: 8px;
padding: 13px 0 13px 16px;
outline: none;
max-height: 44px;
width: 90%;
}
`
export const PaymentMiniCards = styled.div`
background: #FFFFFF;
/* Main/Stroke */
min-width: 281px;
height: 40px;
border: 1px solid #E6E9EF;
border-radius: 10px;
display: flex;
padding: 8px;
margin-top: 8px;
`
export const PaymentButtonWrapper = styled.button`
color: white !important;
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
border: none;
`
export const CategoryCardWrapper = styled.div`
background: #FFFFFF;
/* Main/Stroke */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
border: 1px solid #E6E9EF;
border-radius: 12px;
min-height: 138px;
padding: 0 16px;
.icon{
   color: #A5AAB4;
   font-size: 40px;
}
p{
   margin-top: 10px;
   font-family: 'Noto Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;

color: #17171C;
}
`
export const AppStoreLayer = styled.div`
padding: 40px 48px;
h2{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
color: #17171C;
}
p{
   font-family: 'Noto Sans';
   font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
}
`
export const AppStoreCard = styled.div`
background: #FFFFFF;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
border-radius: 12px;
padding: 32px;
.icon svg{
   color: #A5AAB4;
font-size: 30px;
width: 26px 32px;
}
.stars svg{
color: #32B141;
font-size: 25px;
}
.reyting{
   p{
color: #A5AAB4;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 21px;
margin: 0;
   }
   h5{
      color: #2B2B30;
      font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
margin: 0;
}
}
.reytingson{
 h1{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 84px;
line-height: 50px ;
color: #FFC007;
margin-bottom: 0;
span{
   color: #2B2B30;
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
margin-left: 12px;
}
 }
}
`
export const DefaultH2 = styled.h2`
color: #17171C;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 44px;
`
export const LimonCards = styled.div`
background: #F8F8FA;
border-radius: 12px;
min-height: 369px;
overflow: hidden;
img{
   width: 100%;
}
h4{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;

margin-top:16px;
color: #17171C;
}
.desc{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;

color: #2B2B30;
}
.date{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #A5AAB4;
}
`

export const PartnersCard = styled.div`
background: #FFFFFF;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
padding: 24px 0;
min-height: 120px;
box-sizing: border-box;
img{
   max-height: 72px;
   object-fit: cover;
}
`
export const FooterWrapper = styled.div`
.location {
   p{
      
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px
   }
}
.phone{
   p{
      font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px
   }
}

.title{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #FFFFFF;
}
ul li{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
margin: 8px 0;
transition: all .3s ease;
&:hover{
   color: #FFC007;
   text-decoration: underline;
   cursor: pointer;
}
color: #A5AAB4;
}
`
export const AboutH1 = styled.h1`

font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 47px;
text-align: justify;
color: #2B2B30;
`
export const AboutWrapper = styled.div`
h2{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 42px;
margin-top: 20px;
color: #121E22;
}
h4{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 31px;
margin-bottom: 32px;
color: #121E22;

}
h5{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #1D1D1D;
}
p{
   font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;


color: #17171C; 
}

`

export const AboutBtn = styled.button`
color: #fff;
font-weight: 600;
font-size: 14px !important;
line-height: 19px;
font-family: Noto Sans, sans-serif;
text-align: center;
padding: 12px 5px;
background: #FFC007;
border: 1px solid #E6E9EF;
border-radius: 8px;
width: 197px;
transition: all .4s ease-in-out;
&:hover{
   background-color: #fff;
   border: 1px solid #e6e9ef;
   color: #17171C;
}
`