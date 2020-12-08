import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`

`;

function Dashboard() {
  return (
    <Wrapper>
      Dashboard
      <Link to="/required-reading">Required reading</Link>
      <Link to="/hearing-test">Hearing test</Link>
      <Link to="/click-a-button">Click a button</Link>
      <Link to="/thumb-singing">Thumb singing</Link>
    </Wrapper>
  )
}

export default Dashboard;