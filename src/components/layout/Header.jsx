import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineHome } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const Wrapper = styled.header`
  z-index: 500;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 0 8px;
  background: ${props => props.theme.colors.dark};
  box-shadow: -8px 0px 5px rgba(0,0,0,0.2);
  position: sticky;
  margin-bottom: 30px;
  top: 0;
  font-family: ${props => props.theme.fonts.galindo};
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.three};
  a {
    color: ${props => props.theme.colors.tada};
    text-decoration: none;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const NavSection = styled.nav`

`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const NavLink = styled.li`
  margin: 4px;
  padding: 2px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.two};
  a {
    display: block;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 3px;
    color: ${props => props.theme.colors.tada};
    border: 2px solid ${props => props.theme.colors.dark};
    &:hover {
      border-bottom: 2px solid white;
    }
  }
  #header-icon {
    margin-left: 3px;
  }
`;

const Title = styled.p`
  display: none;
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.four};
  margin-left: 20px;
  @media (min-width: 760px) {
    display: block;
  }
  @media (min-width: 1200px) {
    margin-left: 60px;
  }
`;  

function Header() {
  const data = useStaticQuery(graphql`
    query HandQuery {
      file(name: {eq: "thumb_one"}) {
        childImageSharp {
          fixed(height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const hand = data.file.childImageSharp.fixed;

  return (
    <Wrapper>
      <Left>
        <Img 
          fixed={hand} 
          alt="White gloved hand giving a thumbs up."
        />
        <Title>
          Become Thumb One
        </Title>
      </Left>
      <NavSection>
        <NavLinks>
          <NavLink id="header-fun">
            <Link to="/">Fun<AiOutlineHome id="header-icon"/></Link>
          </NavLink>
          <NavLink id="header-huh">
            <Link to="/about">Huh<HiOutlineQuestionMarkCircle id="header-icon"/></Link>
          </NavLink>
          <NavLink id="header-yo">
            <Link to="/contact">Yo <FiMail id="header-icon"/></Link>
          </NavLink>
        </NavLinks>
      </NavSection>
    </Wrapper>
  )
}

export default Header;