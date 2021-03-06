import React from 'react';
import styled from 'styled-components';
import { ModalBox } from '../shared/Modal';
import Button from '../shared/Button';
import { navigate } from 'gatsby';

const OutroBox = styled(ModalBox)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
    margin-bottom: 15px;
  }
`;

function RequiredReadingOutro() {
  const handleDashboardClick = () => {
    navigate('/')
  }
  
  return (
    <OutroBox>
      <p>Soooo....which book was your favorite?</p>
      <p>Holy Socks is riveting, am I right? Anyway, you're done reading.</p>
      <Button onClick={handleDashboardClick}>Dashboard</Button>
    </OutroBox>
  )
}

export default RequiredReadingOutro;