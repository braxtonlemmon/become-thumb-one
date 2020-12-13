import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../shared/Headings';
import singingData from '../../data/singingData';
import { GiCheckMark } from 'react-icons/gi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SongBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  background: ${props => props.theme.colors.tada};
  cursor: pointer;
  position: relative;
  &:hover {
    p {
      color: ${props => props.theme.colors.sup};
    }
  }
  p {
    color: ${props => props.theme.colors.yo};
    font-size: ${props => props.theme.fontSizes.three};
    text-align: center;
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


function ThumbSingingMain({ setCurrentSong, setModalOpen, songOneDone, songTwoDone }) {
  const handleClickSong = (num) => {
    setCurrentSong(singingData[num]);
    setModalOpen(true);
  }
  
  return (
    <Wrapper>
      <PageTitle>Thumb Singing</PageTitle>
      <p></p>
      <SongBox
        onClick={() => handleClickSong(0)}
      >
        <p>{singingData[0].title}</p>
        {songOneDone && <Check />}
      </SongBox>
      <SongBox
        onClick={() => handleClickSong(1)}
      >
        <p>{singingData[1].title}</p>
        {songTwoDone && <Check />}
      </SongBox>
    </Wrapper>
  )
}

export default ThumbSingingMain;