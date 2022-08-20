import React from 'react'
import { PaymentButtonWrapper } from '../../styles'

const PayButton = (props) => {
   return (
      <PaymentButtonWrapper style={{
         "background": `${props.bg}`,
         "fontSize": "20px"
      }}>
         {props.icon}
      </PaymentButtonWrapper>
   )
}

export default PayButton