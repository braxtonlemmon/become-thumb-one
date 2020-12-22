import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal';
import CloseButton from '../shared/CloseButton';
import Button from '../shared/Button';

const Wrapper = styled(ModalWrapper)`
`;

const TextBox = styled(ModalBox)`
  justify-content: flex-start;
  padding: 0;
  padding-bottom: 15px;
  position: relative;
  overflow: auto;
  h2 {
    padding: 10px;
    padding-top: 15px;
    font-size: ${props => props.theme.fontSizes.two};
    margin-right: 20px;
    margin-bottom: 15px;
    text-align: center;
  }
`;

const Close = styled(CloseButton)`
  position: absolute;
  padding: 0;
  margin: 0;
  right: 10px;
  top: 0;
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
`;

const ModeButton = styled.button`
  font-family: ${props => props.theme.fonts.galindo};
  cursor: pointer;
  background: ${props => props.vowels ? props.theme.colors.hey : 'none'};
  border: ${props => props.vowels ? `3px solid ${props.theme.colors.rawr}` : `2px solid ${props.theme.colors.tada}`};
  color: ${props => props.vowels ? props.theme.colors.rawr : props.theme.colors.tada};
`;

const Toggle = styled.div`
  width: 55px;
  height: 30px;
  background: ${props => props.theme.colors.hey};
  border-radius: 20%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props => props.vowels ? 'flex-start' : 'flex-end'};
  transition: all 300ms ease;
  .toggle-dot {
    height: 25px;
    width: 25px;
    margin-left: 5px;
    margin-right: 5px;
    background: ${props => props.theme.colors.sup};
    border-radius: 20%;
  }
`;

const Text = styled.article`
  width: 85%;
  background: ${props => props.theme.colors.tada};
  color: ${props => props.theme.colors.rawr};
  padding: 10px;
  border-radius: 8px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const DoneButton = styled(Button)`
  &:active, &:focus {
    outline: 0;
  }

`;

function ReadingModal({ setModalOpen, book, setBookRead }) {
  const [vowels, setVowels] = useState(true);
  const [doneX, setDoneX] = useState(25);
  const [doneY, setDoneY] = useState(60);
  const [doneCount, setDoneCount] = useState(0);

  const doneMessages = [
    "Done.",
    "I'm done.",
    "Really, I'm done.",
    "Seriously!",
    "Ugh."
  ]
  const toVowels = (text) => {
    return text.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "");
  }

  const toConsonants = (text) => {
    return text.replace(/[aeiou]/ig, "");
  }

  const randomPercent = () => {
    return Math.floor(Math.random() * 55);
  }

  const toggle = () => {
    setVowels(prev => !prev);
  }

  const handleDoneClick = () => {
    setDoneX(randomPercent());
    setDoneY(randomPercent());
    const theCount = doneCount;
    setDoneCount(theCount + 1);
    if (theCount > 3) {
      setBookRead(true);
      setModalOpen(false);
    }
  }

  const onlyVowels = toVowels(book.text);
  const onlyConsonants = toConsonants(book.text);
  
  const handleCloseClick = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    }
    return () => 
      document.addEventListener("keydown", keyListener);
  });
  
  return (
    <Wrapper>
      <TextBox>
        <h2>{book.title}</h2>
        <Close onClick={handleCloseClick}>x</Close>
        <ToggleButtons>
          <ModeButton 
            onClick={() => setVowels(true)}
            vowels={vowels}
          >Vowel</ModeButton>
          <Toggle 
            vowels={vowels} 
            onClick={toggle}
          >
            <div className="toggle-dot"></div>
          </Toggle>
          <ModeButton 
            onClick={() => setVowels(false)}
            vowels={!vowels}
          >Consonant</ModeButton>
        </ToggleButtons>
        <Text>
          {vowels ? onlyVowels : onlyConsonants}
        </Text>
        <Bottom>
          <DoneButton onClick={handleDoneClick} x={doneX} y={doneY}>{doneMessages[doneCount]}</DoneButton>
        </Bottom>
      </TextBox>
    </Wrapper>
  )
}

export default ReadingModal;