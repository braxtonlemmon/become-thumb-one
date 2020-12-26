import React, { useContext } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { Context } from '../../context/GlobalContext';
import { ModalBox } from '../shared/Modal';
import Button from '../shared/Button';

const Outro = styled(ModalBox)`
  p {
    font-size: ${props => props.theme.fontSizes.three};
    line-height: ${props => props.theme.fontSizes.four};
  }
`;  

function ClickADotDone() {
  const { setClickADotDone } = useContext(Context);
  
  const clickHome = () => {
    setClickADotDone(true);
    navigate('/');
  }
  
  return (
    <Outro>
      <p>Way to keep with it! You have thumb real endurance.</p>
      <Button onClick={clickHome}>Dashboard</Button>
    </Outro>
  )
}

export default ClickADotDone;