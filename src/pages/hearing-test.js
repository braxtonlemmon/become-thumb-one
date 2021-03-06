import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import HearingTestModal from '../components/HearingTest/HearingTestModal';
import HearingTestMain from '../components/HearingTest/HearingTestMain';
import HearingTestOutro from '../components/HearingTest/HearingTestOutro';
import ThumbModal from '../components/ThumbModal';

function HearingTestPage() {
  const [introOpen, setIntroOpen] = useState(true);
  const [isDone, setDone] = useState(false);

  const handleIntroClose = () => {
    setIntroOpen(false);
  }

  const handleOutroClose = () => {
    setDone(false);
  }

  return (
    <Layout>
      <SEO title="Hearing test" />
      {
        introOpen &&  
        <ThumbModal
          isOpen={introOpen}
          handleClose={handleIntroClose}
        >
          <HearingTestModal setIntroOpen={setIntroOpen} />
        </ThumbModal>
      }
      {
        !isDone && 
        <HearingTestMain 
          setDone={setDone} 
          setIntroOpen={setIntroOpen}
        />
      }
      {
        isDone &&
        <ThumbModal
          isOpen={isDone}
          handleClose={handleOutroClose}
        >
          <HearingTestOutro />
        </ThumbModal>
      }
    </Layout>
  )
}

export default HearingTestPage;