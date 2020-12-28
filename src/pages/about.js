import React, {useState} from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import { PageTitle } from '../components/shared/Headings';
import styled from 'styled-components';

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

function AboutPage() {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <PageTitle>About</PageTitle>
        <p>Try to find another place on the internet where you can become thumb one. Try it.</p>
        <p>This is exactly why you are here. You are very welcome.</p>
        <p>Good luck!</p>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage;