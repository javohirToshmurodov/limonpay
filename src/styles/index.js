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