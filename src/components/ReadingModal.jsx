import React from 'react';
import styled from 'styled-components';

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
  border: 2px solid black;
  background: white;
  width: 95%;
  max-width: 700px;
  height: 80%;
  max-height: 700px;
  position: relative;
`;

const CloseButton = styled.button`
  height: 45px;
  width: 45px;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function ReadingModal({ setModalOpen }) {
  const handleCloseClick = () => {
    setModalOpen(false);
  }
  
  return (
    <Wrapper>
      <TextBox>
        <CloseButton onClick={handleCloseClick}></CloseButton>
      </TextBox>
    </Wrapper>
  )
}

export default ReadingModal;