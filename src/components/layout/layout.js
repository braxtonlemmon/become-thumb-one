import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import Header from './Header';
import ColorBar from './ColorBar';
import FontSizeBar from './FontSizeBar';

const Main = styled.main`
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* <ColorBar /> */}
      {/* <FontSizeBar /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
