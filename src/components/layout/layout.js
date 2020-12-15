import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from './Header';
import ColorBar from './ColorBar';
import FontSizeBar from './FontSizeBar';

const Main = styled.main`
  /* height: calc(100% - 40px); */
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
