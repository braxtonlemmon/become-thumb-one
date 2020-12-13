import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import Button from '../shared/Button';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 9px rgba(0,0,0,0.3);
  margin-top: 100px;
  padding: 35px 15px;
  background: ${props => props.theme.colors.rawr};
  color: ${props => props.theme.colors.tada};
  width: 95%;
  max-width: 700px;
  height: 80%;
  max-height: 700px;
  position: relative;
  h2 {
    margin-top: 50px;
  }
  p {
    margin-bottom: 30px;
    text-align: center;
    line-height: ${props => props.theme.fontSizes.two};
  }
`;

function IntroModal () {
  const { name, setIntroModalOpen } = useContext(Context);
  const handleClose = () => {
    setIntroModalOpen(false);
  }
  
  return (
    <Wrapper>
      <TextBox>
        <p>Hey there, {name}. </p>
        <p>Welcome to your personal journey to becoming thumbone.</p>
        <p>On your dashboard you will see four tasks, each one testing thumbthing different.</p>
        <p>Complete each task, and you will be dubbed your well deserved title.</p>
        <p>Here's thumb luck for the road.</p>
        <Button onClick={handleClose}>Thanks.</Button>
      </TextBox>
    </Wrapper>
  )
}

export default IntroModal;