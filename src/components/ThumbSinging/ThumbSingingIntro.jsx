import React from 'react';
import styled from 'styled-components';
import { ModalBox } from '../shared/Modal'
import Button from '../shared/Button';
import { GiMusicalNotes } from 'react-icons/gi';


const IntroBox = styled(ModalBox)``;

function ThumbSingingIntro({ setIntroOpen }) {
  const handleReadyClick = () => {
    setIntroOpen(false);
  }
  
  return (
      <IntroBox>
        <p>How often do you use your thumb's vocal chords? Not often? Oh dear.</p>
        <p>There are two songs to complete. Click through the correct sequence of lyrics in each song and you win!</p>
        <Button onClick={handleReadyClick}>Go <GiMusicalNotes /></Button>
      </IntroBox>
  )
}

export default ThumbSingingIntro;