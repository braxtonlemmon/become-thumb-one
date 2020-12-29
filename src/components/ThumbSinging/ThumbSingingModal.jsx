import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ModalBox } from '../shared/Modal';
import Modal from 'react-modal';

const QuizBox = styled(ModalBox)`
  padding: 0;
  /* position: relative; */
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 800px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* height: min-content; */
  /* height: 80px; */
  justify-content: space-between;
  padding: 0 15px;
  flex: 0 1 auto;
  h2 {
    /* height: 60px; */
    font-size: ${props => props.theme.fontSizes.one};
    display: flex;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.three};
    }
  }
  @media (min-width: 760px) {
    padding: 20px 15px;
  }
`;

const Words = styled.div`
  /* height: 100%; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  flex: 1 1 auto;
  p {
    text-align: center;
    height: 100%;
    border: 1px solid black;
  }
`;

const Tile = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;
  font-size: ${props => props.theme.fontSizes.one};
  background: ${props => props.correct ? props.theme.colors.yo : props.theme.colors.sup};
  color: ${props => props.correct ? props.theme.colors.rawr : props.theme.colors.tada};
  &:hover {
    background: ${props => props.theme.colors.yo};
    color: ${props => props.theme.colors.rawr};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.three};
  font-weight: bolder;
  text-shadow: 0 0 4px ${props => props.theme.colors.sup};
  display: flex;
  align-items: flex-start;
  &:hover {
    color: ${props => props.theme.colors.hey};
  }
`;

const WooHoo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.six};
`;

function Spot({ children, guesses, setGuesses, num, questions, setQuestions, resetQuiz }) {
  const [correct, setCorrect] = useState(false);

  const handleClick = () => {
    let current = guesses;
    if ((num - current[current.length -1]) === 1) {
      current.push(num);
      setCorrect(true);
      setQuestions(prev => ({ ...prev, [num]: true }))
      setGuesses(current);
    } else {
      setCorrect(false);
      resetQuiz();
      setGuesses([0]);
    }
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <Tile
      onClick={handleClick}
      onKeyDown={(e) => onKeyDown(e)}
      correct={correct && questions[num]}
      tabIndex="0"
    >
      {children}
    </Tile>
  )
}


function ThumbSingingModal({ setModalOpen, modalOpen, song, setSongDone }) {
  const [attempts, setAttempts] = useState(0);
  const [guesses, setGuesses] = useState([0]);
  const reset = {
    1: false, 
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false
  }
  const [questions, setQuestions] = useState(reset);
  const [isDone, setDone] = useState(false);

  const resetQuiz = () => {
    setQuestions(reset);
  }

  const handleCloseClick = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    setAttempts(prev => prev + 1);
    if (attempts < 1) {
      song.words.sort(() => Math.random() - 0.5);
    }
  }, [])

  useEffect(() => {
    if (guesses.length > 12) {
      setSongDone(true);
      setDone(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 1500)
    }
  }, [guesses.length])

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleCloseClick}
      style={{
        overlay: {
          background: 'rgba(0,0,0,0.4)',
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: '500',
        },
        content: {
          position: 'absolute',
          top: '60px',
          display: 'block',
          left: '2%',
          right: '2%',
          width: '90%',
          maxWidth: '700px',
          height: '85%',
          maxHeight: '800px',
          margin: '0 auto',
          background: '#faf6f1',
          border: 'none',
          color: '#EAF6FF',
        }
      }}
    >
      <QuizBox>
        <Top>
          <h2>{song.intro}...</h2>
          <CloseButton onClick={handleCloseClick}>x</CloseButton>
        </Top>
        <Words>
          {
            song.words.map(word => 
              <Spot
              num={word.id}
              guesses={guesses}
              setGuesses={setGuesses}
              questions={questions}
              setQuestions={setQuestions}
              resetQuiz={resetQuiz}
              >{word.word}</Spot>
              )   
          }
          {
            isDone &&
            <WooHoo>
                WOOHOO!
            </WooHoo>
          }
        </Words>
      </QuizBox>
    </Modal>
  )
}

export default ThumbSingingModal;