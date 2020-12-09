import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`

`;

function Welcome() {  
  return (
    <Wrapper>
      <Link to="/get-to-know-you">Start</Link>
    </Wrapper>
  )
}

export default Welcome;