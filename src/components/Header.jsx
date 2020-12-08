import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.header`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  background: yellow;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
`;

const NavLink = styled.li`
  border: 1px solid black;
  height: 30px;
  width: 50px;
  a {
    display: block;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

function Header() {
  return (
    <Wrapper>
      Become Thumb One
      <NavLinks>
        <NavLink>
          <Link to="/">Fun</Link>
        </NavLink>
        <NavLink>
          <Link to="/about">Huh?</Link>
        </NavLink>
        <NavLink>
          <Link to="/contact">Yo.</Link>
        </NavLink>
      </NavLinks>
    </Wrapper>
  )
}

export default Header;