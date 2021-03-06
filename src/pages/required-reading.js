import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import { Context } from '../context/GlobalContext';
import RequiredReadingMain from '../components/RequiredReading/RequiredReadingMain';
import RequiredReadingIntro from '../components/RequiredReading/RequiredReadingIntro';
import RequiredReadingOutro from '../components/RequiredReading/RequiredReadingOutro';
import ThumbModal from '../components/ThumbModal';

function RequiredReadingPage() {
  const { setRequiredReadingDone } = useContext(Context);
  const [oneRead, setOneRead] = useState(false);
  const [twoRead, setTwoRead] = useState(false);
  const [threeRead, setThreeRead] = useState(false);
  const [fourRead, setFourRead] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    if (
      oneRead &&
      twoRead &&
      threeRead &&
      fourRead
    ) {
      setRequiredReadingDone(true);
      setDone(true);
    }
  }, [oneRead, twoRead, threeRead, fourRead])

  const handleCloseIntro = () => {
    setIntroOpen(false);
  }

  const handleCloseOutro = () => {
    setDone(false);
  }

  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <RequiredReadingMain
        setOneRead={setOneRead}
        setTwoRead={setTwoRead}
        setThreeRead={setThreeRead}
        setFourRead={setFourRead}
        oneRead={oneRead}
        twoRead={twoRead}
        threeRead={threeRead}
        fourRead={fourRead}
        setIntroOpen={setIntroOpen}
      />
      {
        introOpen &&
        <ThumbModal
          isOpen={introOpen}
          handleClose={handleCloseIntro}
        >
          <RequiredReadingIntro setIntroOpen={setIntroOpen} />
        </ThumbModal>
      }
      {
        isDone &&
        <ThumbModal
          isOpen={isDone}
          handleClose={handleCloseOutro}
        >
          <RequiredReadingOutro />
        </ThumbModal>
      }
    </Layout>
  )
}

export default RequiredReadingPage;