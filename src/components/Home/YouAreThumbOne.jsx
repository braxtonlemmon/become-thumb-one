import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import styled from 'styled-components';
import {Context} from '../../context/GlobalContext';

const Wrapper = styled.div`

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
      <h2>You are thumb one!</h2>
      <button onClick={resetAdventure}>Reset</button>
    </Wrapper>
  )
}

export default YouAreThumbOne;