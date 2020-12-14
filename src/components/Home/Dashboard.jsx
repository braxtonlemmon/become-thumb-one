import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import IntroModal from './IntroModal';
import { Link, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import Img from 'gatsby-image';
import { GiCheckMark } from 'react-icons/gi';
import Button from '../shared/Button';
import { PageTitle } from '../shared/Headings';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 50px;
  #dashboard-got-this {
    color: ${props => props.theme.colors.rawr};
    font-size: ${props => props.theme.fontSizes.three};
  }
`;

const Thumbatar = styled.div`
  width: 150px;
  margin-bottom: 20px;
`;

const Tasks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: center;
  gap: 15px;
  margin: 30px 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.yo};
  }
`;

const Task = styled.div`
  position: relative;
  background: ${props => props.done? 'none' : props.theme.colors.hey};
  background: ${props => props.theme.colors.hey};
  height: 140px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.two};
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.hey};
  cursor: ${props => props.done ? 'initial' : 'pointer'};
  &:hover {
    background: ${props => props.done? props.theme.colors.hey : props.theme.colors.tada};
  }
`;

const Check = styled(GiCheckMark)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.rawr};
`;

function Dashboard() {
  const { 
    name, 
    thumbatar,
    introModalOpen,
    setIntroModalOpen,
    requiredReadingDone,
    hearingTestDone,
    clickADotDone,
    thumbSingingDone
  } = useContext(Context);
  
  const handleHelpClick = () => {
    setIntroModalOpen(true);
  }

  return (
    <Wrapper>
      <PageTitle>Dashboard</PageTitle>
      <Thumbatar>
        <Img fluid={thumbatar.node.childImageSharp.fluid} />
      </Thumbatar>
      <p id="dashboard-got-this">You got this, {name}.</p>
      <Tasks>
        <Link to="/required-reading">
          <Task done={requiredReadingDone}>
            Required Reading
            { requiredReadingDone && <Check />}
          </Task>
        </Link>
        <Link to="/hearing-test">
          <Task done={hearingTestDone}>
            Hearing Test
            {hearingTestDone && <Check />}
          </Task>
        </Link>
        <Link to="/click-a-dot">
          <Task done={clickADotDone}>
            Click-A-Dot
            {clickADotDone && <Check />}
          </Task>
        </Link>
        <Link to="/thumb-singing">
          <Task done={thumbSingingDone}>
            Thumb Singing
            {thumbSingingDone && <Check />}
          </Task>
        </Link>
      </Tasks>
      <Button onClick={handleHelpClick}>Help!?</Button>
      {
        introModalOpen &&
        <IntroModal />
      }
    </Wrapper>
  )
}

export default Dashboard;