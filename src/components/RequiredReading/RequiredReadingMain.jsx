import React from 'react';
import styled from 'styled-components'
import { PageTitle } from '../shared/Headings';
import Bookshelf from './Bookshelf';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
`;

function RequiredReadingMain({
  setOneRead,
  setTwoRead,
  setThreeRead,
  setFourRead
}) {
  return (
    <Wrapper>
      <PageTitle>Required Reading</PageTitle>
      <Bookshelf
        setOneRead={setOneRead}
        setTwoRead={setTwoRead}
        setThreeRead={setThreeRead}
        setFourRead={setFourRead}
      />
    </Wrapper>
  )
}

export default RequiredReadingMain;