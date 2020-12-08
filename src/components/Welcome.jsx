import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

function Welcome({ setStarted }) {
  const handleStartClick = () => {
    setStarted(true);
  }
  
  return (
    <Wrapper>
      <p onClick={handleStartClick}>Start</p>
    </Wrapper>
  )
}

export default Welcome;