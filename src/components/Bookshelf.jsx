import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingModal from './ReadingModal';
import BookData from '../data/BookData';

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
  height: 300px;
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



function Bookshelf({ setOneRead, setTwoRead, setThreeRead, setFourRead }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  const handleBookClick = (book) => {
    setCurrentBook(book)
    setModalOpen(true);
  }

  const getBookFunction = () => {
    let setBookRead;
    switch (currentBook.id) {
      case 0:
        setBookRead = setOneRead;
        break;
      case 1:
        setBookRead = setTwoRead;
        break;
      case 2:
        setBookRead = setThreeRead;
        break;
      case 3:
        setBookRead = setFourRead;
        break;
      default:
        break;
    }
    return setBookRead;
  }

  return (
    <Wrapper>
      <Books>
        {BookData.map((book, index) => {
          return (
            <Book onClick={() => handleBookClick(book)} >
              <h2>{book.title}</h2>
            </Book>
          )
        })}
      </Books>
      <Shelf></Shelf>
      {
        modalOpen &&
        <ReadingModal setModalOpen={setModalOpen} book={currentBook} setBookRead={getBookFunction()} />
      }
    </Wrapper>
  )
}

export default Bookshelf;