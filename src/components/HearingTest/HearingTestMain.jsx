import React, { useState } from 'react';
import styled from 'styled-components';
import { hearingData } from '../../data/hearingData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HearingTestMain({ setDone }) {
  const [question, setQuestion] = useState(0);
  
  const handleNextClick = () => {
    if (question < 5) {
      setQuestion(prev => prev + 1);
    } else {
      setDone(true);
    }
  }

  const handlePlayOne = () => {
    let audio = new Audio(`./${hearingData[question].soundOne}`);
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <Wrapper>
      <h2>{hearingData[question].question}</h2>
      <button onClick={handlePlayOne}>play one</button>
      <button onClick={handleNextClick}>Next</button>
    </Wrapper>
  )
}

export default HearingTestMain;