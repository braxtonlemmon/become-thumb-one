import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import { results } from '../../data/hearingData';
import { Link } from 'gatsby';
import Button from '../shared/Button';
import { ModalWrapper, ModalBox } from '../shared/Modal';

const Wrapper = styled(ModalWrapper)``;

const OutroBox = styled(ModalBox)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   p {
//     text-align: center;
//     margin: 0 50px 30px 50px;
//     font-size: ${props => props.theme.fontSizes.three};
//     color: ${props => props.theme.colors.rawr};
//   }
// `;

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
    <Wrapper>
      <OutroBox>
        <p>Based on your responses, we've determined your favorite genre of music is {getResult()}!</p>
        <Link to="/"><Button>Dashboard</Button></Link>
      </OutroBox>
    </Wrapper>
  )
}

export default HearingTestOutro;