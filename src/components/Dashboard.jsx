import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { Context } from '../context/GlobalContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  const { 
    name, 
    setName,
    requiredReadingDone,
    hearingTestDone,
    clickAButtonDone,
    thumbSingingDone
  } = useContext(Context);
  
  return (
    <Wrapper>
      Dashboard {name}
      <p onClick={() => {
        setName('jo')
      }}>Change</p>
      <Link to="/required-reading">Required reading</Link>
      <Link to="/hearing-test">Hearing test</Link>
      <Link to="/click-a-button">Click a button</Link>
      <Link to="/thumb-singing">Thumb singing</Link>
      <p>{requiredReadingDone ? 'reading done' : 'reading not done'}</p>
    </Wrapper>
  )
}

export default Dashboard;