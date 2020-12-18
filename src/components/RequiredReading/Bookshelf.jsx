import React, { useState } from 'react';
import styled from 'styled-components';
import ReadingModal from './ReadingModal';
import bookData from '../../data/bookData';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 500px;
  margin-bottom: 50px;
`;

const Books = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
`;


const Book = styled.div`
  visibility: ${props => props.done ? 'hidden' : 'visible'};
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${props => props.background};
  color: ${props => props.color};
  &:hover {
    transform: translateY(-8px);
  }
  transition: transform 250ms ease;
  h2 {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
  }
`;

const Shelf = styled.div`
  height: 50px;
  width: 90%;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  overflow: hidden;
  background: brown;
  #wood {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow:hidden;
  }
`;

function Bookshelf({ 
  setOneRead, 
  setTwoRead, 
  setThreeRead, 
  setFourRead,
  oneRead,
  twoRead,
  threeRead,
  fourRead
}) {
  const data = useStaticQuery(graphql`
    query WoodQuery {
      file(name: {eq: "wood"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const wood = data.file.childImageSharp.fluid;
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
  const status = [oneRead, twoRead, threeRead, fourRead];
  const handleBookClick = (book) => {
    setCurrentBook(book)
    setModalOpen(true);
  }

  const handleKeyDown = (e, book) => {
      if (e.keyCode === 13) {
        handleBookClick(book);
    }
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
        {bookData.map((book, index) => {
          return (
            <Book 
              onClick={() => handleBookClick(book)} 
              onKeyDown={(e) => handleKeyDown(e, book)}
              background={book.background}
              color={book.color}
              height={book.height}
              width={book.width}
              done={status[index]}
              tabIndex="0"
            >
              <h2>{book.title}</h2>
            </Book>
          )
        })}
      </Books>
      <Shelf>
        <Img 
          id="wood" 
          fluid={wood} 
          alt="Wood grain."
        />
      </Shelf>
      {
        modalOpen &&
        <ReadingModal setModalOpen={setModalOpen} book={currentBook} setBookRead={getBookFunction()} />
      }
    </Wrapper>
  )
}

export default Bookshelf;