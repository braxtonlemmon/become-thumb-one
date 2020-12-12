import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 30px; */
  h2 {
    font-family: ${props => props.theme.fonts.galindo};
    font-size: ${props => props.theme.fontSizes.six};
    text-align: center;
    max-width: 250px;
    color: ${props => props.theme.colors.hey};
    text-shadow: 0 0 10px ${props => props.theme.colors.rawr};
  }
`;

const Intro = styled.p`
  text-align: center;
  margin: 15px 20px 0 20px;
  width: 70%;
  max-width: 300px;
  font-family: ${props => props.theme.fonts.galindo};
  color: ${props => props.theme.colors.yo};
  border-radius: 5px;
  padding: 8px;
  line-height: ${props => props.theme.fontSizes.two};
  /* background: ${props => props.theme.colors.yo}; */

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
      <h2>Become Thumb One</h2>
      <Intro>
        <span>If you are ready to prove to the world that you are thumb one, use the thumb of your choice and click the hand below to get started!</span>
      </Intro>
      <Link to="/get-to-know-you">
        <Image>
          <Img id="thumb-pic" fluid={thumbPic.childImageSharp.fluid} />
        </Image>
      </Link>
    </Wrapper>
  )
}

export default Welcome;