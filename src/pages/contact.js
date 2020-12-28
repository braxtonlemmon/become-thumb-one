import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import { PageTitle } from '../components/shared/Headings';
import styled from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  p {
    text-align: center;
    color: ${props => props.theme.colors.rawr};
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSizes.two};
    line-height: ${props => props.theme.fontSizes.three};
  }

  #mail-icon > * {
    fill: ${props => props.theme.colors.tada};
  }
`;

const Mail = styled(HiOutlineMail)`
  color: ${props => props.theme.colors.hey};
  cursor: pointer;
  height: ${props => props.theme.fontSizes.seven};
  width: ${props => props.theme.fontSizes.seven};
  margin-bottom: 20px;
  transform: rotate(0);
  transition: transform 300ms ease;
  &:hover {
    transform: rotate(7deg);
  }
`;

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Wrapper>
        <PageTitle>Contact</PageTitle>
        <p>Are you confused? Weirded out? Tell me about it.</p>
        <p>Send me an email:</p>
        <a 
          href="mailto:braxtonlemmon@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Mail id="mail-icon"></Mail>
        </a>
        <p>And I will respond thumbtime.</p>
      </Wrapper>
    </Layout>
  )
}

export default ContactPage;