import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import ClickADotModal from '../components/ClickADot/ClickADotModal';
import ClickADotMain from '../components/ClickADot/ClickADotMain';
import ClickADotDone from '../components/ClickADot/ClickADotDone';
import ThumbModal from '../components/ThumbModal';

function ClickAButtonPage() {
  const [isIntroOpen, setIntroOpen] = useState(true);
  const [isDone, setDone] = useState(false);
  
  const handleIntroClose = () => {
    setIntroOpen(false);
  }

  const handleDoneClose = () => {
    setDone(false);
  }
  
  return (
    <Layout>
      <SEO title="Thumb Singing" />
      {
        isIntroOpen &&
        <ThumbModal
          isOpen={isIntroOpen}
          handleClose={handleIntroClose}
        >
          <ClickADotModal setIntroOpen={setIntroOpen} />
        </ThumbModal>
      }
      <ClickADotMain 
        setDone={setDone}
      />
      {
        isDone &&
        <ThumbModal
          isOpen={isDone}
          handleClose={handleDoneClose}
        >
          <ClickADotDone />
        </ThumbModal>
      }
    </Layout>
  )
}

export default ClickAButtonPage;