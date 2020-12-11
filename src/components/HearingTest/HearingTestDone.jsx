import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import { results } from '../../data/hearingData';
import { Link } from 'gatsby';

const Wrapper = styled.div`

`;

function HearingTestDone() {
  const { setHearingTestDone } = useContext(Context);

  const getResult = () => {
    const randomNum = Math.floor(Math.random() * results.length);
    return results[randomNum].toLowerCase();
  }

  useEffect(() => {
    setHearingTestDone(true)
  }, [])
  
  return (
    <Wrapper>
      <p>Based on your responses, we've determined your favorite genre of music is {getResult()}</p>
      <Link to="/">Dashboard</Link>
    </Wrapper>
  )
}

export default HearingTestDone;