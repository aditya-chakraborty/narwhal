import React from 'react'
import styled from 'styled-components'
import addIcon from '../assets/icon-add.svg'

const Button = (props) => {
  return (
    <Btn>
        <Icon src={props.icon}></Icon>
        {props.text}
    </Btn>
  )
}

const Btn = styled.button`
    
`

export default Button