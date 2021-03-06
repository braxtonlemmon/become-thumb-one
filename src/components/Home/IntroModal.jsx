import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/GlobalContext';
import Button from '../shared/Button';
import { ModalBox } from '../shared/Modal';

const TextBox = styled(ModalBox)`
  p {
    padding-bottom: 15px;
  }
`;

function IntroModal () {
  const { name, setIntroModalOpen } = useContext(Context);
  const handleClose = () => {
    setIntroModalOpen(false);
  }
  
  return (
    <TextBox>
      <p>Hey there, {name}. </p>
      <p>Welcome to your personal journey to becoming thumbone.</p>
      <p>On your dashboard you will see four tasks, each one testing thumbthing different.</p>
      <p>Complete each task, and you will be dubbed your well deserved title.</p>
      <p>Here's thumb luck for the road.</p>
      <Button onClick={handleClose}>Thanks.</Button>
    </TextBox>
  )
}

export default IntroModal;