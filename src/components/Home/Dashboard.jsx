import React, { useContext } from 'react';
import styled from 'styled-components';
import IntroModal from './IntroModal';
import { Link } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import Img from 'gatsby-image';
import { GiCheckMark } from 'react-icons/gi';
import Button from '../shared/Button';
import { PageTitle } from '../shared/Headings';
import ThumbModal from '../ThumbModal';

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
  @media (min-width: 760px) {
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Task = styled.div`
  position: relative;
  background: ${props => props.done? 'none' : props.theme.colors.hey};
  background: ${props => props.theme.colors.sup};
  height: 140px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.two};
  padding: 10px;
  color: ${props => props.theme.colors.tada};
  cursor: ${props => props.done ? 'initial' : 'pointer'};
  &:hover {
    background: ${props => props.done? props.theme.colors.hey : props.theme.colors.coal};

  };
  @media (min-width: 1020px) {
    height: 200px;
    width: 200px;
    font-size: ${props => props.theme.fontSizes.three};
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

  const handleIntroClose = () => {
    setIntroModalOpen(false);
  }

  return (
    <Wrapper>
      <PageTitle>Dashboard</PageTitle>
      {
        thumbatar &&
        <Thumbatar>
          <Img 
            fluid={thumbatar.node.childImageSharp.fluid} 
            alt="User's selected thumbatar."
            />
        </Thumbatar>
      }
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
        <ThumbModal
          isOpen={introModalOpen}
          handleClose={handleIntroClose}
        >
          <IntroModal />
        </ThumbModal>
      }
    </Wrapper>
  )
}

export default Dashboard;