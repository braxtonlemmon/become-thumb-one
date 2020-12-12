import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.header`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  padding: 0 8px;
  background: ${props => props.theme.colors.rawr};
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

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    ". . yo"
    ". huh ."
    "fun . .";
  #header-fun {
    grid-area: fun;
  }
  #header-huh {
    grid-area: huh;
  }
  #header-yo {
    grid-area: yo;
  }
`;

const NavLink = styled.li`
  /* border: 1px solid black; */
  /* height: 30px; */
  /* width: 50px; */
  margin: 4px;
  padding: 2px;
  background: ${props => props.theme.colors.tada};
  font-size: ${props => props.theme.fontSizes.two};
  a {
    display: block;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.yo};
  }
`;

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <h1>Become Thumb One</h1>
      </Link>
      <NavLinks>
        <NavLink id="header-fun">
          <Link to="/">Fun</Link>
        </NavLink>
        <NavLink id="header-huh">
          <Link to="/about">Huh?</Link>
        </NavLink>
        <NavLink id="header-yo">
          <Link to="/contact">Yo.</Link>
        </NavLink>
      </NavLinks>
    </Wrapper>
  )
}

export default Header;