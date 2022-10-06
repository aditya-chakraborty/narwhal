import React from 'react'
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <PageLoader>
        <Spinner />
        <Text>NARWHAL</Text>
    </PageLoader>
  )
}

const scaleOut = keyframes`
    0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
    } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
    }
` 

const PageLoader = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #042235;
    z-index: 1000;
`

const Spinner = styled.div`
    position: relative;
    top: 35%;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 100%;  
    animation: ${scaleOut} 1.0s infinite ease-in-out;
` 

const Text = styled.p`
    color: #666;
    text-align: center;
    top: 40%;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 100;
    line-height: 2.5rem;
    font-size: 2rem;
    color: #FFFFFF;
    font-family: Montserrat, sans-serif;
`




// @-webkit-keyframes sk-scaleout {
//   0% { -webkit-transform: scale(0) }
//   100% {
//     -webkit-transform: scale(1.0);
//     opacity: 0;
//   }
// }



export default Loader