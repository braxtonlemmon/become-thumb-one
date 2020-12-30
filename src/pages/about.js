import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import { PageTitle } from '../components/shared/Headings';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  p {
    text-align: center;
    color: ${props => props.theme.colors.rawr};
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes.two};
    line-height: ${props => props.theme.fontSizes.three};
  }
`;

const GitHubIcon = styled(FaGithub)`
  color: ${props => props.theme.colors.hey};
  cursor: pointer;
  height: 48px;
  width: 48px;
  transform: rotate(0);
  transition: transform 300ms ease;
  &:hover {
    transform: rotate(7deg);
  }
`;

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <PageTitle>About</PageTitle>
        <p>Try to find another place on the internet where you can become thumb one. Try it.</p>
        <p>This is exactly why you are here. You are very welcome.</p>
        <p>Good luck!</p>
        <p>To find out more about the project, check out the GitHub page below.</p>
        <a href="https://github.com/braxtonlemmon/become-thumb-one" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage;