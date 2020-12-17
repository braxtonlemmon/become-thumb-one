import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../shared/Headings';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.hi};
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border: 8px solid ${props => props.borderColor};
  border-radius: 50%;
  background: tan;
  position: absolute;
  top: ${props => `${props.y}%`};
  left: ${props => `${props.x}%`};
  cursor: pointer;
  background: ${props => props.color};
  transition: background 700ms ease, border-color 700ms ease;
  box-shadow: 0 0 8px rgba(0,0,0,0.4);
  z-index: 50;
  p {
    font-size: ${props => props.theme.fontSizes.six};
    color: ${props => props.color};
    filter: invert();
  }
  @media (min-width: 760px) {
    top: ${props => `${props.bigY}%`};
    left: ${props => `${props.bigX}%`};
  }
`;

const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777216).toString(16);
    return "#000000".slice(0, -color.length) + color;
}

function ClickADotMain({ setDone }) {
  const [dotX, setDotX] = useState(60);
  const [dotY, setDotY] = useState(50);
  const [bigDotX, setBigDotX] = useState(60);
  const [bigDotY, setBigDotY] = useState(50);
  const [clicks, setClicks] = useState(30);
  const [color, setColor] = useState(getRandomColor());
  const [borderColor, setBorderColor] = useState(getRandomColor());
 
  const randomPercent = (low, high) => {
    let percent = 0;
    while (percent < low || percent > high) {
      percent = Math.floor(Math.random() * 100);
    }
    return percent;
  }

  const handleClick = () => {
    setDotX(randomPercent(1, 60));
    setDotY(randomPercent(20, 78));
    setBigDotX(randomPercent(1, 80))
    setBigDotY(randomPercent(20, 80))
    setClicks(prev => prev - 1);
    setColor(getRandomColor());
    setBorderColor(getRandomColor());
  }

  useEffect(() => {
    if (clicks === 0) {
      setDone(true);
    }
  }, [clicks, setDone])
  
  return (
    <Wrapper>
      <PageTitle>Click-A-Dot</PageTitle>
      <Dot 
        onClick={handleClick} 
        x={dotX} 
        y={dotY} 
        bigX={bigDotX}
        bigY={bigDotY}
        color={color} 
        borderColor={borderColor} 
      >
        <p>{clicks}</p>
      </Dot>
    </Wrapper>
  )
}

export default ClickADotMain;