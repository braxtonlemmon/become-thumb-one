import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageTitle } from '../shared/Headings';
import singingData from '../../data/singingData';
import { GiCheckMark } from 'react-icons/gi';
import DancingThumb from '../DancingThumb';
import Button from '../shared/Button';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 45px;
  }
`;

const Songs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

const SongBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  padding: 15px;
  height: 190px;
  margin: 10px;
  background: ${props => props.theme.colors.sup};
  cursor: pointer;
  position: relative;
  &:hover {
    p {
      font-size: 30px;
    }
  }
  p {
    color: ${props => props.theme.colors.tada};
    font-size: ${props => props.theme.fontSizes.three};
    text-align: center;
  }
  @media (min-width: 760px) {
    width: 200px;
    height: 200px;
    margin: 25px;
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

function ThumbSingingMain({ setCurrentSong, setModalOpen, songOneDone, songTwoDone, setOutroOpen, setIntroOpen }) {
  const handleClickSong = (num) => {
    setCurrentSong(singingData[num]);
    setModalOpen(true);
  }

  const handleKeyDown = (e, selection) => {
    if (e.keyCode === 13) {
      selection === 'one' ? handleClickSong(0) : handleClickSong(1);
    }
  }
  
  useEffect(() => {
    if (songOneDone && songTwoDone) {
      setOutroOpen(true);
    }
  }, [songOneDone, songTwoDone]);
  
  return (
    <Wrapper>
      <PageTitle>Thumb Singing</PageTitle>
      <Songs>
        <SongBox
          onClick={() => handleClickSong(0)}
          onKeyDown={(e) => handleKeyDown(e, 'one')}
          tabIndex="0"
        >
          <p>{singingData[0].title}</p>
          {songOneDone && <Check />}
        </SongBox>
        <SongBox
          onClick={() => handleClickSong(1)}
          onKeyDown={(e) => handleKeyDown(e, 'two')}
          tabIndex="0"
        >
          <p>{singingData[1].title}</p>
          {songTwoDone && <Check />}
        </SongBox>
      </Songs>
      <Button onClick={() => setIntroOpen(true)}>Help?!</Button>
      <DancingThumb />
    </Wrapper>
  )
}

export default ThumbSingingMain;