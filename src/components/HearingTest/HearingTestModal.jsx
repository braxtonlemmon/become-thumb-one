import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal';

const Wrapper = styled(ModalWrapper)``;

const IntroBox = styled(ModalBox)``;

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