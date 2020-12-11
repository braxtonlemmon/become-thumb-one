import React, { useState } from 'react';
import styled from 'styled-components';
import BookData from '../../data/BookData';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  border: 2px solid black;
  background: white;
  width: 95%;
  max-width: 700px;
  height: 80%;
  max-height: 700px;
  position: relative;
  h2 {
    margin-top: 50px;
  }
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const DoneButton = styled.button`
  position: absolute;
  top: ${props => `${props.y}%`};
  left: ${props => `${props.x}%`};
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


  // Maybe going to attempt to offer an option to scramble up the letters of each word, keeping the first and last letters the same
  // const toScrambles = (text) => {
  //   const splitText = text.split(" ");
  //   splitText.map(word => {
  //     if (word.length > 4) {

  //     }
  //   })
  // }
  const onlyVowels = toVowels(book.text);
  const onlyConsonants = toConsonants(book.text);
  
  // const handleDoneClick = () => {
  //   setBookRead(true);
  //   setModalOpen(false);
  // }
  
  const handleCloseClick = () => {
    setModalOpen(false);
  }
  
  return (
    <Wrapper>
      <TextBox>
        <h2>{book.title}</h2>
        <p>{vowels ? onlyVowels : onlyConsonants}</p>
        <ToggleButtons>
          <button onClick={() => setVowels(true)}>Vowel Mode</button>
          <button onClick={() => setVowels(false)}>Consonant Mode</button>
        </ToggleButtons>
        <DoneButton onClick={handleDoneClick} x={doneX} y={doneY}>{doneMessages[doneCount]}</DoneButton>
        <CloseButton onClick={handleCloseClick}></CloseButton>
      </TextBox>
    </Wrapper>
  )
}

export default ReadingModal;