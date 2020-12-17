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
    transform: rotate(5) translateX(50%);
  }
  60% {
    transform: rotate(-5) translateX(60%);
  }
   70% {
    transform: rotate(5) translateX(70%);
  }
   80% {
    transform: rotate(-5) translateX(80%);
  }
   90% {
    transform: rotate(5) translateX(90%);
  }
   100% {
    transform: rotate(-5) translateX(100%);
  }
  
`;

// const dance = keyframes`
//   from {
//     transform: rotate(5deg) translateX(50px);
//   }
//   to {
//     transform: rotate(-5deg) translateX(30px);
//   }
// `;
const slide = keyframes`
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
  /* border: 1px solid black; */
  position: relative;
  margin-top: 50px;
`;

const Image = styled.div`
  width: 100px;
  height: 200px;
  /* border: 1px solid white; */
  position: absolute;
  animation: ${slide} 14s ease infinite;
  & > * {
    animation: ${dance} 2s ease infinite;
  }
`;

function DancingThumb () {
  const { thumbatar } = useContext(Context);
  return (
    <Wrapper>
      <Image>
        <Img fluid={thumbatar.node.childImageSharp.fluid} />
      </Image>
    </Wrapper>
  )
}

export default DancingThumb;
