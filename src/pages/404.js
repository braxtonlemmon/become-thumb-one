import React from "react"
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Img from 'gatsby-image';
import styled from 'styled-components';
import Button from '../components/shared/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
  p, h1 {
    color: ${props => props.theme.colors.coal};
  }
  h1 {
    font-size: ${props => props.theme.fontSizes.six};
  }
  p {
    font-size: ${props => props.theme.fontSizes.three};
  }
`;


const BadHand = styled(Img)`
  transform: rotate(180deg) scaleX(-1);
`;

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>404: Not Found</h1>
      <BadHand fixed={data.file.childImageSharp.fixed} />
      <p>Thumbthing went wrong.</p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Wrapper>   
  </Layout>
)

export const query = graphql`
  query HandQuery404 {
    file(name: {eq: "thumb_one"}) {
      childImageSharp {
        fixed(height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default NotFoundPage
