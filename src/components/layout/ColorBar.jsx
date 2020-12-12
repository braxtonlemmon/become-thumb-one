import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 70%;
  max-width: 400px;
  #rawr {
    background: ${props => props.theme.colors.rawr};
    color: ${props => props.theme.colors.tada};
  }
  #tada {
    background: ${props => props.theme.colors.tada};  
    color: ${props => props.theme.colors.rawr};
  }
  #hey {
    background: ${props => props.theme.colors.hey};
    color: ${props => props.theme.colors.rawr};
  }
  #hi {
    background: ${props => props.theme.colors.hi};
    color: ${props => props.theme.colors.rawr};
  }
  #yo {
    background: ${props => props.theme.colors.yo};
    color: ${props => props.theme.colors.hey};
  }
  #sup {
    background: ${props => props.theme.colors.sup};
    color: ${props => props.theme.colors.tada};
  }
  button {
    width: 30px;
  }
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 50px;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
`;

const Block = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ColorBar() {
  const [isVisible, setVisible] = useState(false);
  
  const toggleVisibility = () => {
    setVisible(prev => !prev);
  }

  return (
    <Wrapper>
      {
        isVisible &&
        <Colors>
          <Block id="rawr">rawr</Block>
          <Block id="tada">tada</Block>
          <Block id="hey">hey</Block>
          <Block id="hi">hi</Block>
          <Block id="yo">yo</Block>
          <Block id="sup">sup</Block>
        </Colors>
      }
      <button onClick={toggleVisibility}>{isVisible ? '-' : '+'}</button>
    </Wrapper>
  )
}

export default ColorBar;