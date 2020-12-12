import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { hearingData } from '../../data/hearingData';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  width: 200px;
  cursor: pointer;
  .hearing-pic {
    width: 100%;
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 20px 0;
`;

function HearingTestMain({ setDone }) {
  const data = useStaticQuery(graphql`
    query HearingPics {
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
  // console.log(images[0].node.name);
  const getImage = (imageName) => {
    const result = images.find(image => image.node.name === imageName);
    return result;
  }
  
  const [question, setQuestion] = useState(0);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const handleNextClick = () => {
    if (question < 5) {
      setQuestion(prev => prev + 1);
    } else {
      setDone(true);
    }
  }

  const handlePlayOne = () => {
    let audio = new Audio(`./${hearingData[question].imageOne}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }

  const handlePlayTwo = () => {
    let audio = new Audio(`./${hearingData[question].imageTwo}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }

  useEffect(() => {
    const first = getImage(hearingData[question].imageOne);
    const second = getImage(hearingData[question].imageTwo);
    console.log(first);
    setImageOne(first);
    setImageTwo(second);
    
  }, [question])

  useEffect(() => {
    // console.log(imageOne);
  }, [])

  return (
    <Wrapper>
      <h2>{hearingData[question].question}</h2>
      <Images>
        <Image onClick={handlePlayOne}>
          {
            imageOne &&
            <Img className="hearing-pic" fluid={imageOne.node.childImageSharp.fluid} />
          }
        </Image>
        <Image onClick={handlePlayTwo}>
          {
            imageTwo &&
            <Img className="hearing-pic" fluid={imageTwo.node.childImageSharp.fluid} />
          }
        </Image>
      </Images>
      <button onClick={handleNextClick}>Next</button>
    </Wrapper>
  )
}

export default HearingTestMain;