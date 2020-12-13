import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal';
import Button from '../shared/Button';

const Wrapper = styled(ModalWrapper)``;

const IntroBox = styled(ModalBox)``;

function HearingTestModal({ setIntroOpen }) {
  const handleCloseClick = () => {
    setIntroOpen(false)
  }
  
  return (
    <Wrapper>
      <IntroBox>
        <p>This hearing test is simple.</p>
        <p>You will be asked a question and will have two choices of sounds to respond to that question.</p>
        <p>To listen and choose a sound, just click on its associated picture.</p>
        <Button onClick={handleCloseClick}>Begin</Button>
      </IntroBox>
    </Wrapper>
  )
}

export default HearingTestModal;