import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Context } from '../context/GlobalContext';
import Img from 'gatsby-image';

const dance = keyframes`
  0% {
    transform: rotate(-5deg) translateX(0) translateY(5px);
  }
  10% {
    transform: rotate(5deg) translateX(10%);
  }
  20% {
    transform: rotate(-5deg) translateX(20%) translateY(-5px);
  }
  30% {
    transform: rotate(5) translateX(30%);
  }
  40% {
    transform: rotate(-5) translateX(40%) translateY(5px);
  }
  50% {
    transform: rotate(5deg) translateX(50%);
  }
  60% {
    transform: rotate(-5) translateX(60%);
  }
   70% {
    transform: rotate(5) translateX(70%);
  }
   80% {
    transform: rotate(-5) translateX(60%) translateY(-5px);
  }
   90% {
    transform: rotate(5deg) translateX(50%);
  }
   100% {
    transform: rotate(-5) translateX(40%);
  }
  
`;

const slideSmall = keyframes`
  0% {
    left: 10%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 10%;
  }
`;

const slideLarge = keyframes`
  0% {
    left: 10%;
  }
  50% {
    left: 80%;
  }
  100% {
    left: 10%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 50px;
`;

const Image = styled.div`
  width: 100px;
  height: 200px;
  position: absolute;
  animation: ${slideSmall} 14s ease infinite;
  & > * {
    animation: ${dance} 4s ease infinite;
  }
  @media (min-width: 900px) {
    animation: ${slideLarge} 16s ease infinite;
  }
`;

function DancingThumb () {
  const { thumbatar } = useContext(Context);
  return (
    <Wrapper>
      {
        thumbatar &&
        <Image>
          <Img fluid={thumbatar.node.childImageSharp.fluid} alt="Image of selected thumbatar."/>
        </Image>
      }
    </Wrapper>
  )
}

export default DancingThumb;
