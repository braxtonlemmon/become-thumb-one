import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';

const Wrapper = styled.div`

`;

function HearingTestDone() {
  const { setHearingTestDone } = useContext(Context);

  useEffect(() => {
    setHearingTestDone(true)
  }, [])
  
  return (
    <Wrapper>
      DONE
    </Wrapper>
  )
}

export default HearingTestDone;