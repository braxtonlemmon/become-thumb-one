import React from 'react';
import styled from 'styled-components';

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

const IntroBox = styled.div`
  width: 90%;
  max-width: 600px;
  height: 80%;
  max-height: 700px;
  border: 1px solid black;
  background: white;
  position: relative;
`;

const CloseButton = styled.button`
  height: 45px;
  width: 45px;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;


function HearingTestModal({ setIntroOpen }) {
  const handleCloseClick = () => {
    setIntroOpen(false)
  }
  
  return (
    <Wrapper>
      <IntroBox>
        <CloseButton onClick={handleCloseClick}></CloseButton>
      </IntroBox>
    </Wrapper>
  )
}

export default HearingTestModal;