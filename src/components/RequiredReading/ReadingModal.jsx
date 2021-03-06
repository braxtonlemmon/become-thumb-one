import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBox } from '../shared/Modal';
import CloseButton from '../shared/CloseButton';
import Button from '../shared/Button';

const TextBox = styled(ModalBox)`
  justify-content: flex-start;
  padding: 0;
  padding-bottom: 15px;
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
  display: block;
  margin-bottom: 15px;
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
  }
`;

const ModeButton = styled.button`
  font-family: ${props => props.theme.fonts.galindo};
  cursor: pointer;
  background: ${props => props.chosen ? props.theme.colors.dark : 'none'};
  border: ${props => props.chosen ? `3px solid ${props.theme.colors.dark}` : `2px solid ${props.theme.colors.dark}`};
  color: ${props => props.chosen ? props.theme.colors.tada : props.theme.colors.dark};
  border-radius: 5px;
  height: 40px;
  margin: 4px auto;
  display: block;
  &:focus {
    outline: 4px solid ${props => props.theme.colors.sup};
  }
  @media (min-width: 450px) {
    margin: 0 4px;
  }
`;

const Text = styled.article`
  width: 85%;
  background: ${props => props.theme.colors.tada};
  color: ${props => props.theme.colors.rawr};
  padding: 10px;
  border-radius: 8px;
  margin-top: 2px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-bottom: 20px;
`;

const DoneButton = styled(Button)``;

function ReadingModal({ setModalOpen, book, setBookRead, modalOpen }) {
  const [vowels, setVowels] = useState(true);
  const [consonants, setConsonants] = useState(false);
  const [scrambled, setScrambled] = useState(false);
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
  
  const scrambleWord = (theWord) => {
    const isAlpha = (ch) => { return /^[A-Z]$/i.test(ch) }
    let word, lastChar;
    if (isAlpha(theWord[theWord.length -1])) {
      word = theWord;
      lastChar = ''
    } else {
      word = theWord.slice(0, theWord.length - 1);
      lastChar = theWord[theWord.length -1];
    }
    let middle = word.slice(1, word.length - 1).split('');
    for (let i = middle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [middle[i], middle[j]] = [middle[j], middle[i]];
    }
    return `${word[0]}${middle.join('')}${word[word.length - 1]}${lastChar}`;
  }
  
  const toScrambled = (text) => {
    const words = text.split(' ');
    const scrambledWords = words.map(word => {
      if (word.length > 2) {
        return scrambleWord(word);
      }
      return word;
    })
    return scrambledWords.join(' ');
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
  
  const handleCloseClick = () => {
    setModalOpen(false);
  }
  
  const onlyVowels = toVowels(book.text);
  const onlyConsonants = toConsonants(book.text);
  const onlyScrambled = toScrambled(book.text);
  const [content, setContent] = useState(onlyVowels);

  return (
    <TextBox>
      <h2>{book.title}</h2>
      <Close onClick={handleCloseClick}>x</Close>
      <ToggleButtons>
        <ModeButton 
          onClick={() => {
            setVowels(true);
            setConsonants(false);
            setScrambled(false);
            setContent(onlyVowels)
          }}
          chosen={vowels}
          >Vowel</ModeButton>
        <ModeButton 
          onClick={() => {
            setVowels(false)
            setConsonants(true);
            setScrambled(false);
            setContent(onlyConsonants);
          }}
          chosen={consonants}
        >
          Consonant
        </ModeButton>
        <ModeButton
          onClick={() => {
            setVowels(false);
            setConsonants(false);
            setScrambled(true);
            setContent(onlyScrambled);
          }}
          chosen={scrambled}
        >Scrambled</ModeButton>
      </ToggleButtons>
      <Text>
        {content}
      </Text>
      <Bottom>
        <DoneButton onClick={handleDoneClick} x={doneX} y={doneY}>{doneMessages[doneCount]}</DoneButton>
      </Bottom>
    </TextBox>
  )
}

export default ReadingModal;