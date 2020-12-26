import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import ThumbSingingIntro from '../components/ThumbSinging/ThumbSingingIntro';
import ThumbSingingMain from '../components/ThumbSinging/ThumbSingingMain';
import ThumbSingingModal from '../components/ThumbSinging/ThumbSingingModal';
import ThumbSingingOutro from '../components/ThumbSinging/ThumbSingingOutro';
import { Context } from '../context/GlobalContext';
import ThumbModal from '../components/ThumbModal';

function ThumbSingingPage() {
  const { setThumbSingingDone } = useContext(Context);
  const [songOneDone, setSongOneDone] = useState(false);
  const [songTwoDone, setSongTwoDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState();
  const [introOpen, setIntroOpen] = useState(true);
  const [outroOpen, setOutroOpen] = useState(false);

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

  const handleCloseIntro = () => {
    setIntroOpen(false);
  }
  
  useEffect(() => {
    if (songOneDone && songTwoDone) {
      setThumbSingingDone(true);
    }
  }, [songOneDone, songTwoDone]);

  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <ThumbSingingMain 
        setModalOpen={setModalOpen}
        setCurrentSong={setCurrentSong}
        songOneDone={songOneDone}
        songTwoDone={songTwoDone}
        setOutroOpen={setOutroOpen}
      />
      {
        introOpen &&
        <ThumbModal
          isOpen={introOpen}
          handleClose={handleCloseIntro}
        >
          <ThumbSingingIntro setIntroOpen={setIntroOpen} />
        </ThumbModal>
      }
      {
        modalOpen &&
        <ThumbSingingModal 
          setModalOpen={setModalOpen} 
          song={currentSong} 
          setSongDone={getSongFunction()}
          modalOpen={modalOpen} 
        />
      }
      {
        outroOpen &&
        <ThumbSingingOutro />
      }
    </Layout>
  )
}

export default ThumbSingingPage;