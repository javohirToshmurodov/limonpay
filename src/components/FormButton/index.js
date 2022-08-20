import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultButtonWrapper } from '../../styles'

const FormButton = (props) => {
   const navigate = useNavigate()
   const BtnClicked = (link) => {
      navigate(link)
   }
   return (
      <DefaultButtonWrapper style={{
         "background": `${props.bg}`,
         "border": `1px solid ${props.color}`
      }} onClick={() => BtnClicked(props.route)}>
         {props.title}
      </DefaultButtonWrapper>
   )
}

export default FormButton