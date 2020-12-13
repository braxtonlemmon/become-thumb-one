import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
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
  h3 {
    text-align: center;
    margin: 0 20px;
    font-size: ${props => props.theme.fontSizes.two};
    color: ${props => props.theme.colors.rawr};
  }
`;

const Images = styled.div`
  /* width: 100%; */
  /* height: 400px; */
  padding: 0 40px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 15px 0;
  position: relative;
  /* border: 1px solid red; */
`;

const Image = styled.div`
  width: 120px;
  cursor: pointer;
  padding: 10px;
  /* border: 1px solid black; */
  .hearing-pic {
    width: 100%;
  }
`;

const HandBox = styled.div`
  width: 40px;
  position: absolute;
  top: 20px;
  left: 0;
  opacity: ${props => (props.selected === 'one' || props.selected ==='two') ? '1' : '0'};
  /* transition: opacity 300ms ease; */
  ${props => props.selected === 'one' ? 
    css`
      top: 20%;
    `:
    css`
      top: 80%;
    `
  }
  z-index: 400;
`;

const Next = styled(Button)`
  position: absolute; 
  right: 30px;
  top: 200px;
  display: ${props => props.selected ? 'block' : 'none'};
`;

function HearingTestMain({ setDone }) {
  const data = useStaticQuery(graphql`
    query HearingPics {
      file(name: {eq: "thumb_one"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
  const hand = data.file;
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

  useEffect(() => {
    const first = getImage(hearingData[question].imageOne);
    const second = getImage(hearingData[question].imageTwo);
    console.log(first);
    setImageOne(first);
    setImageTwo(second);
    
  }, [question])

  return (
    <Wrapper>
      <PageTitle>Hearing Test</PageTitle>
      <h3>{hearingData[question].question}</h3>
      <Images>
        <Image onClick={(e) => handlePlayOne(e)} selected={selected === 'one'}>
          {
            imageOne &&
            <Img className="hearing-pic" fluid={imageOne.node.childImageSharp.fluid} />
          }
        </Image>
        <HandBox selected={selected}>
          <Img fluid={hand.childImageSharp.fluid} />
        </HandBox>
        <Image onClick={(e) => handlePlayTwo(e)} selected={selected === 'two'}>
          {
            imageTwo &&
            <Img className="hearing-pic" fluid={imageTwo.node.childImageSharp.fluid} />
          }
        </Image>
      </Images>
      <Next onClick={handleNextClick} selected={selected}>Next</Next>
    </Wrapper>
  )
}

export default HearingTestMain;