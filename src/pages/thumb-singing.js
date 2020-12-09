import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ThumbSingingModal from '../components/ThumbSingingModal';
import SingingData from '../data/SingingData';
import { Context } from '../context/GlobalContext';

function ThumbSingingPage() {
  const { setThumbSingingDone } = useContext(Context);
  const [songOneDone, setSongOneDone] = useState(false);
  const [songTwoDone, setSongTwoDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState();

  const getSongFunction = () => {
    let setSongDone;
    switch (currentSong.id) {
      case 0:
        setSongDone = setSongOneDone;
        break;
      case 1:
        setSongDone = setSongTwoDone;
        break;
      default:
        break;
    }
    return setSongDone;
  }
  
  useEffect(() => {
    if (songOneDone && songTwoDone) {
      setThumbSingingDone(true);
    }
  }, [songOneDone, songTwoDone]);

  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <p>ThumbSingingPage</p>
      <button onClick={() => {
        setCurrentSong(SingingData[0])
        setModalOpen(true)
        }
      }>Song 1</button>

      <button onClick={() => {
        setCurrentSong(SingingData[1])
        setModalOpen(true)
        }
      }>Song 2</button>

      {
        modalOpen &&
        <ThumbSingingModal setModalOpen={setModalOpen} song={currentSong} setSongDone={getSongFunction()} />
      }
    </Layout>
  )
}

export default ThumbSingingPage;