import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { hearingData } from '../../data/hearingData';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../shared/Button';
import { PageTitle } from '../shared/Headings';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
  h2 {
    text-align: center;
    margin: 0 20px;
    margin-bottom: 30px;
    font-size: ${props => props.theme.fontSizes.two};
    color: ${props => props.theme.colors.rawr};
  }
`;

const Images = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 15px 0;
  position: relative;
  @media (min-width: 760px) {
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${props => props.theme.colors.tada};
  border-radius: 8px;
  border: ${props => props.selected ? '3px dashed black' : 'none'};
`;

const Image = styled.div`
  width: 120px;
  cursor: pointer;
  .hearing-pic {
    width: 100%;
  }
`;

const Next = styled(Button)`
  display: ${props => props.selected ? 'block' : 'none'};
`;

function HearingTestMain({ setDone }) {
  const data = useStaticQuery(graphql`
    query SoundsQuery {
      allFile(filter: {relativeDirectory: {eq: "sounds" }}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.edges;
  const getImage = (imageName) => {
    const result = images.find(image => image.node.name === imageName);
    return result;
  }
  
  const [question, setQuestion] = useState(0);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [selected, setSelected] = useState('');

  const handleNextClick = () => {
    setSelected('');
    if (question < 5) {
      setQuestion(prev => prev + 1);
    } else {
      setDone(true);
    }
  }

  const handlePlayOne = (e) => {
    setSelected('one');
    let audio = new Audio(`./${hearingData[question].imageOne}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }

  const handlePlayTwo = (e) => {
    setSelected('two');
    let audio = new Audio(`./${hearingData[question].imageTwo}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }

  const handleKeyDown = (e, selection) => {
    if (e.keyCode === 13) {
      selection === 'one' ? handlePlayOne() : handlePlayTwo();
    }

  }

  useEffect(() => {
    const first = getImage(hearingData[question].imageOne);
    const second = getImage(hearingData[question].imageTwo);
    setImageOne(first);
    setImageTwo(second);
    
  }, [question])

  return (
    <Wrapper>
      <PageTitle>Hearing Test</PageTitle>
      <h2>{hearingData[question].question}</h2>
      <Images>
        <ImageContainer 
          onClick={(e) => handlePlayOne(e)} 
          selected={selected === 'one'}
          tabIndex="0"
          onKeyDown={(e) => handleKeyDown(e, 'one')}
        >
          <Image  selected={selected === 'one'}>
            {
              imageOne &&
              <Img 
                className="hearing-pic" 
                fluid={imageOne.node.childImageSharp.fluid} 
                selected={selected === 'one'}
                alt={hearingData[question].altOne}  
              />
            }
          </Image>
        </ImageContainer>
        <ImageContainer 
          onClick={(e) => handlePlayTwo(e)} 
          selected={selected === 'two'}
          tabIndex="0"
          onKeyDown={(e) => handleKeyDown(e, 'two')}
        >
          <Image  selected={selected === 'two'}>
            {
              imageTwo &&
              <Img 
                className="hearing-pic" 
                fluid={imageTwo.node.childImageSharp.fluid} 
                selected={selected === 'two'}
                alt={hearingData[question].altTwo}
              />
            }
          </Image>
        </ImageContainer>
      </Images>
      <Next onClick={handleNextClick} selected={selected}>Next</Next>
    </Wrapper>
  )
}

export default HearingTestMain;