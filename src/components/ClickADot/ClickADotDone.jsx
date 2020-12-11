import React, { useContext } from 'react';
import styled from 'styled-components';
import { nagivate, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 100;
`;

const Outro = styled.div`
  width: 95%;
  max-width: 600px;
  height: 80%;
  max-height: 700px;
  border: 1px solid black;
  background: white;
`;  

const GoHome = styled.button`
`;

function ClickADotDone() {
  const { setClickADotDone } = useContext(Context);
  
  const clickHome = () => {
    setClickADotDone(true);
    navigate('/');
  }
  
  return (
    <Wrapper>
      <Outro>
        <GoHome onClick={clickHome}>Dashboard</GoHome>
      </Outro>
    </Wrapper>
  )
}

export default ClickADotDone;