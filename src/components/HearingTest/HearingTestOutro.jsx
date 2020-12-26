import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import { results } from '../../data/hearingData';
import { Link } from 'gatsby';
import Button from '../shared/Button';
import { ModalBox } from '../shared/Modal';

const OutroBox = styled(ModalBox)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
  }
`;

function HearingTestOutro() {
  const { setHearingTestDone } = useContext(Context);

  const getResult = () => {
    const randomNum = Math.floor(Math.random() * results.length);
    return results[randomNum].toLowerCase();
  }

  useEffect(() => {
    setHearingTestDone(true)
  }, [])
  
  return (
    <OutroBox>
      <p>Based on your responses, we've determined your favorite genre of music is {getResult()}!</p>
      <Link to="/"><Button>Dashboard</Button></Link>
    </OutroBox>
  )
}

export default HearingTestOutro;