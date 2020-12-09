import React, { useState } from 'react';
import styled from 'styled-components';

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

const QuizBox = styled.div`
  border: 2px solid black;
  background: white;
  width: 95%;
  height: 80%;
  max-width: 700px;
  max-height: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  h2 {
    height: 60px;
    font-size: 1.2em;
  }
`;

const Words = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  justify-items: stretch;
  align-items: center;
  p {
    text-align: center;
    height: 100%;
    border: 1px solid black;
  }
`;

const Tile = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 1.3em;
  background: ${props => props.correct ? 'blue' : 'yellow'};
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

  return (
    <Tile
      onClick={handleClick}
      correct={correct && questions[num]}
    >
      {children}
    </Tile>
  )
}

function ThumbSingingModal({ setModalOpen }) {
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
  const [play, setPlay] = useState(false);

  const resetQuiz = () => {
    setQuestions(reset);
  }

  const handlePlayClick = () => {
    setPlay(true);
  }
  
  const handleCloseClick = () => {
    setModalOpen(false);
  }
  
  return (
    <Wrapper>
      <QuizBox>
        <h2>Thumbwhere over the rainbow, way up...</h2>
        <Words>
          <Spot 
            num={2}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >and</Spot>
          <Spot 
            num={4}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >dreams</Spot>
          <Spot 
            num={6}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >you</Spot>
          <Spot 
            num={1}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >high</Spot>
          <Spot 
            num={8}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >of</Spot>
          <Spot 
            num={10}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >in</Spot>
          <Spot 
            num={7}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >dream</Spot>
          <Spot 
            num={5}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >that</Spot>
          <Spot 
            num={12}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >lullaby</Spot>
          <Spot 
            num={11}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >a</Spot>
          <Spot 
            num={9}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >once</Spot>
          <Spot 
            num={3}
            guesses={guesses}
            setGuesses={setGuesses}
            questions={questions}
            setQuestions={setQuestions}
            resetQuiz={resetQuiz}
          >the</Spot>
        </Words>
        <CloseButton onClick={handleCloseClick}></CloseButton>
      </QuizBox>
    </Wrapper>
  )
}

export default ThumbSingingModal;