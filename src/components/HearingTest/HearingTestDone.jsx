import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import { results } from '../../data/hearingData';
import { Link } from 'gatsby';
import Button from '../shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    margin: 0 50px 30px 50px;
    font-size: ${props => props.theme.fontSizes.three};
    color: ${props => props.theme.colors.rawr};
  }
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
      <p>Based on your responses, we've determined your favorite genre of music is {getResult()}!</p>
      <Link to="/"><Button>Dashboard</Button></Link>
    </Wrapper>
  )
}

export default HearingTestDone;