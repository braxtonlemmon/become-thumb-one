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
  background: ${props => props.theme.colors.sup};
  box-shadow: -8px 0px 5px rgba(0,0,0,0.2);
  position: sticky;
  margin-bottom: 30px;
  top: 0;
  font-family: ${props => props.theme.fonts.galindo};
  color: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.three};
  border-bottom: 3px solid ${props => props.theme.colors.rawr};
  a {
    color: ${props => props.theme.colors.tada};
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const NavLink = styled.li`
  border: 3px solid ${props => props.theme.colors.rawr};
  /* height: 30px; */
  /* width: 50px; */
  margin: 4px;
  padding: 2px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.two};
  &:hover {
    background: ${props => props.theme.colors.hey};
  }
  a {
    display: block;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.rawr};

  }
  #header-icon {
    margin-left: 3px;
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
      <Link to="/">
        {/* <h1>Become Thumb One</h1> */}
        <Img fixed={hand} />
      </Link>
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
    </Wrapper>
  )
}

export default Header;