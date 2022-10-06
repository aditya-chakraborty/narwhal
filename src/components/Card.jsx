import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <CardContainer display={props.display} flexDirection={props.flexDirection}>
      {props.children}
    </CardContainer>
  );
}

const CardContainer = styled.div`
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection}
    width: max-content;
    height: max-content;
    background-color: white;
`

export default Card