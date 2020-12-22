import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal'
import Button from '../shared/Button';

const Wrapper = styled(ModalWrapper)``;

const IntroBox = styled(ModalBox)``;

function RequiredReadingIntro({ setIntroOpen }) {
  const handleReadyClick = () => {
    setIntroOpen(false);
  }
  
  return (
    // <Wrapper>
    <IntroBox>
      <p>Reading? Boring, I know. Truth is, you need to read to become thumb one.</p>
      <p>There are four texts you need to read. You can read in vowel mode or consonant mode, depending on your preference.</p>
      <p>Click a book to start!</p>
      <Button onClick={handleReadyClick}>Let's read!</Button>
    </IntroBox>
    // {/* </Wrapper> */}
  )
}

export default RequiredReadingIntro;