import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import {Context} from '../../context/GlobalContext';
import Button from '../shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: ${props => props.theme.fontSizes.seven};
    text-align: center;
    margin-bottom: 25px;
    background: -webkit-linear-gradient(${props => props.theme.colors.tada}, ${props => props.theme.colors.hey});
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 4px 3px rgba(0,0,0,0.6);
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
      <h2>Woo! You are thumb one!</h2>
      <Button onClick={resetAdventure}>Do it again!</Button>
    </Wrapper>
  )
}

export default YouAreThumbOne;