import React from 'react';
import styled from 'styled-components';
import { ModalBox } from '../shared/Modal';
import Button from '../shared/Button';

const IntroBox = styled(ModalBox)``;

function HearingTestModal({ setIntroOpen }) {
  const handleCloseClick = () => {
    setIntroOpen(false)
  }
  
  return (
    <IntroBox>
      <p>This is a simple hearing test.</p>
      <p>You will be asked a question and can respond with one of two sound choices.</p>
      <p>To listen and choose a sound, just click on its associated picture.</p>
      <Button onClick={handleCloseClick}>Begin</Button>
    </IntroBox>
  )
}

export default HearingTestModal;