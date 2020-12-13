import React, { useContext } from 'react';
import styled from 'styled-components';
import { nagivate, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import { ModalWrapper, ModalBox } from '../shared/Modal';
import Button from '../shared/Button';

const Wrapper = styled(ModalWrapper)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
  }
`;

const Outro = styled(ModalBox)``;  

function ClickADotDone() {
  const { setClickADotDone } = useContext(Context);
  
  const clickHome = () => {
    setClickADotDone(true);
    navigate('/');
  }
  
  return (
    <Wrapper>
      <Outro>
        <p>Way to keep with it! You have thumb real endurance.</p>
        <Button onClick={clickHome}>Dashboard</Button>
      </Outro>
    </Wrapper>
  )
}

export default ClickADotDone;