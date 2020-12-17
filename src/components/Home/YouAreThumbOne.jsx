import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import styled, {keyframes} from 'styled-components';
import {Context} from '../../context/GlobalContext';
import Button from '../shared/Button';

const colorShift = keyframes`
  0% {
    color: red;
  }
  10% {
    color: pink;
  }
  20% {
    color: blue;
  }
  30% {
    color: lime;
  }
  40% {
    color: green;
  }
  50% {
    color: purple;
  }
  60% {
    color: aqua;
  }
  70% {
    color: grey;
  }
  80% {
    color: yellow;
  }
  90% {
    color: brown;
  }
  100% {
    color: black;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: ${props => props.theme.fontSizes.seven};
    text-align: center;
    margin-bottom: 25px;
    color: ${props => props.theme.colors.rawr};
    text-shadow: 4px 3px rgba(0,0,0,0.6);
    max-width: 400px;
    animation: ${colorShift} 3s ease infinite;
  }
`;

function YouAreThumbOne() {
  const {
    setName,
    setThumbatar,
    setStarted,
    setRequiredReadingDone,
    setHearingTestDone,
    setClickADotDone,
    setThumbSingingDone,
    setTasksDone
  } = useContext(Context);

  const resetAdventure = () => {
    setName('');
    setThumbatar('');
    setStarted(false);
    setRequiredReadingDone(false);
    setHearingTestDone(false);
    setClickADotDone(false);
    setThumbSingingDone(false);
    setTasksDone(false);
    navigate('/');
  }
  
  return (
    <Wrapper>
      <h1>Woo! You are thumb one!</h1>
      <Button onClick={resetAdventure}>Do it again!</Button>
    </Wrapper>
  )
}

export default YouAreThumbOne;