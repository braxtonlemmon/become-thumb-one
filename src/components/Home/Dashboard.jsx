import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import Img from 'gatsby-image';
import { GiCheckMark } from 'react-icons/gi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    font-size: ${props => props.theme.fontSizes.four};
    margin-bottom: 20px;
    color: ${props => props.theme.colors.yo};
    text-shadow: 0 0 5px ${props => props.theme.colors.hey};
  }
  #dashboard-got-this {
    color: ${props => props.theme.colors.rawr};
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
    setName,
    requiredReadingDone,
    hearingTestDone,
    clickADotDone,
    thumbSingingDone
  } = useContext(Context);
  
  return (
    <Wrapper>
      <h2>Dashboard</h2>
      <Thumbatar>
        <Img fluid={thumbatar.node.childImageSharp.fluid} />
      </Thumbatar>
      <p id="dashboard-got-this">You got this, {name}.</p>
      <Tasks>
        <Link to="/required-reading">
          <Task done={requiredReadingDone}>
            Required Reading
            <Check />
          </Task>
        </Link>
        <Link to="/hearing-test">
          <Task done={hearingTestDone}>
            Hearing Test
          </Task>
        </Link>
        <Link to="/click-a-dot">
          <Task done={clickADotDone}>
            Click-A-Dot
          </Task>
        </Link>
        <Link to="/thumb-singing">
          <Task done={thumbSingingDone}>
            Thumb Singing
          </Task>
        </Link>
      </Tasks>
    </Wrapper>
  )
}

export default Dashboard;