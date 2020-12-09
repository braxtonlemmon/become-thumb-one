import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingModal from './ReadingModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Books = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
`;


const Book = styled.div`
  width: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h2 {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
`;

const BookOne = styled(Book)`
  height: 300px;
`;

const BookTwo = styled(Book)`
  height: 310px;
`;

const BookThree = styled(Book)`
  height: 320px;
`;

const BookFour = styled(Book)`
  height: 295px;
`;

const Shelf = styled.div`
  height: 50px;
  width: 90%;
  border: 1px solid black;
`;

function Bookshelf() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookClick = () => {
    setModalOpen(true);
  }

  return (
    <Wrapper>
      <Books>
        <BookOne onClick={handleBookClick}><h2>Snow Beetle</h2></BookOne>
        <BookTwo onClick={handleBookClick}><h2>The Consciousness Stream</h2></BookTwo>
        <BookThree onClick={handleBookClick}><h2>Running Through Sliding Doors</h2></BookThree>
        <BookFour onClick={handleBookClick}><h2>Holy Socks</h2></BookFour>
      </Books>
      <Shelf></Shelf>
      {
        modalOpen &&
        <ReadingModal setModalOpen={setModalOpen} />
      }
    </Wrapper>
  )
}

export default Bookshelf;