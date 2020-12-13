import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal'
import Button from '../shared/Button';
import { GiMusicalNotes } from 'react-icons/gi';

const Wrapper = styled(ModalWrapper)``;

const IntroBox = styled(ModalBox)``;

function ThumbSingingIntro({ setIntroOpen }) {
  const handleReadyClick = () => {
    setIntroOpen(false);
  }
  
  return (
    <Wrapper>
      <IntroBox>
        <p>How often do you use your thumb's vocal chords? Not often? Oh dear.</p>
        <p>There are two songs to complete. Click through the correct sequence of lyrics in each song and you win!</p>
        <Button onClick={handleReadyClick}>Go <GiMusicalNotes /></Button>
      </IntroBox>
    </Wrapper>
  )
}

export default ThumbSingingIntro;