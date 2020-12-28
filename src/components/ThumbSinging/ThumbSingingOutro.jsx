import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalBox } from '../shared/Modal';
import Button from '../shared/Button';
import { navigate } from 'gatsby';

const DoneBox = styled(ModalBox)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
  }
`;

function ThumbSingingOutro() {
  const handleDoneClick = () => {
    navigate('/');
  }
  
  return (
    <DoneBox>
      <p>YUS!</p>
      <p>That was thumb sweet music. Good job.</p>
      <Button onClick={handleDoneClick}>Dashboard</Button>
    </DoneBox>
  )
}

export default ThumbSingingOutro;