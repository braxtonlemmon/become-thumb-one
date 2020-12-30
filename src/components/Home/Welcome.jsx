import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 30px; */
  h1 {
    font-family: ${props => props.theme.fonts.galindo};
    font-size: ${props => props.theme.fontSizes.six};
    text-align: center;
    max-width: 250px;
    color: ${props => props.theme.colors.sup};
    /* text-shadow: 0 0 10px ${props => props.theme.colors.rawr}; */
    @media (min-width: 760px) {
      font-size: ${props => props.theme.fontSizes.seven};
    }
  }
`;

const Intro = styled.p`
  text-align: center;
  margin: 20px 20px 10px 20px;
  width: 70%;
  max-width: 500px;
  font-family: ${props => props.theme.fonts.galindo};
  color: ${props => props.theme.colors.dark};
  border-radius: 5px;
  padding: 8px;
  line-height: ${props => props.theme.fontSizes.two};
  /* background: ${props => props.theme.colors.yo}; */
  @media (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: 29px;
  }
`;

const Image = styled.div`
  width: 80px;
  margin-top: 20px;
  &:hover {
    transform: rotate(15deg);
  }
  transition: transform 500ms ease;
`;

function Welcome() {  
  const data = useStaticQuery(graphql`
    query ThumbPic {
      file(name: {eq: "thumb_one"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const thumbPic = data.file;
  return (
    <Wrapper>
      <h1>Become Thumb One</h1>
      <Intro>
          If you are ready to prove to the world that you are thumb one, use the thumb of your choice and click the hand below to get started!
      </Intro>
      <Link to="/get-to-know-you">
        <Image>
          <Img 
            id="thumb-pic" 
            fluid={thumbPic.childImageSharp.fluid} 
            alt="White gloved hand giving a thumbs up."
          />
        </Image>
      </Link>
    </Wrapper>
  )
}

export default Welcome;