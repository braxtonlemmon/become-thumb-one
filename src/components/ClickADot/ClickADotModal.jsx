import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import { ModalWrapper, ModalBox } from '../shared/Modal';

const Wrapper = styled(ModalWrapper)``;

const IntroBox = styled(ModalBox)``;

function ClickADotModal({ setIntroOpen }) {
  const handleCloseClick = () => {
    setIntroOpen(false)
  }
  
  return (
    <Wrapper>
      <IntroBox>
        <p>Time to test your thumb endurance.</p>
        <p>Using a mouse? Yes, you still need to click with your thumb.</p>
        <Button onClick={handleCloseClick}>Ready to click...</Button>
      </IntroBox>
    </Wrapper>
  )
}

export default ClickADotModal;