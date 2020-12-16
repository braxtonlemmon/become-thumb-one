import React from 'react';
import styled from 'styled-components'
import { PageTitle } from '../shared/Headings';
import Bookshelf from './Bookshelf';
import Button from '../shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function RequiredReadingMain({
  setOneRead,
  setTwoRead,
  setThreeRead,
  setFourRead,
  oneRead,
  twoRead,
  threeRead,
  fourRead,
  setIntroOpen
}) {
  const toggleIntro = () => {
    setIntroOpen(prev => !prev);
  }

  return (
    <Wrapper>
      <PageTitle>Required Reading</PageTitle>
      <Bookshelf
        setOneRead={setOneRead}
        setTwoRead={setTwoRead}
        setThreeRead={setThreeRead}
        setFourRead={setFourRead}
        oneRead={oneRead}
        twoRead={twoRead}
        threeRead={threeRead}
        fourRead={fourRead}
      />
      <Button onClick={toggleIntro}>Help!?</Button>
    </Wrapper>
  )
}

export default RequiredReadingMain;