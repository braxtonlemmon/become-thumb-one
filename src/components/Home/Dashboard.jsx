import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  const { 
    name, 
    thumbatar,
    setName,
    requiredReadingDone,
    hearingTestDone,
    clickADotDone,
    thumbSingingDone
  } = useContext(Context);
  
  return (
    <Wrapper>
      <p>Dashboard: Welcome {name}</p>
      <p>Thumbatar: {thumbatar}</p>
      <Link to="/required-reading">Required reading</Link>
      <Link to="/hearing-test">Hearing test</Link>
      <Link to="/click-a-dot">Click a dot</Link>
      <Link to="/thumb-singing">Thumb singing</Link>
      <p>{requiredReadingDone ? 'reading done' : 'reading not done'}</p>
      <p>{hearingTestDone ? 'hearing test done' : 'hearing test not done'}</p>
      <p>{clickADotDone ? 'click-a-dot done' : 'click-a-dot not done'}</p>
      <p>{thumbSingingDone ? 'thumb singing done' : 'thumb singing not done'}</p>
    </Wrapper>
  )
}

export default Dashboard;