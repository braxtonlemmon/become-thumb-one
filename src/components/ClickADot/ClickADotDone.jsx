import React, { useContext } from 'react';
import styled from 'styled-components';
import { nagivate, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import { ModalWrapper, ModalBox } from '../shared/Modal';
import Button from '../shared/Button';

const Wrapper = styled(ModalWrapper)``;

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
        <h2>YES</h2>
        <p>You did it!</p>
        <Button onClick={clickHome}>Dashboard</Button>
      </Outro>
    </Wrapper>
  )
}

export default ClickADotDone;