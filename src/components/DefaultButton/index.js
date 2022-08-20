import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultButtonWrapper } from '../../styles'

const DefaultButton = (props) => {
   const navigate = useNavigate()
   const BtnClicked = (link) => {
      navigate(link)
   }
   return (
      <DefaultButtonWrapper style={{
         "background": `${props.bg}`
      }} onClick={() => BtnClicked(props.route)}>
         {props.title}
      </DefaultButtonWrapper>
   )
}

export default DefaultButton