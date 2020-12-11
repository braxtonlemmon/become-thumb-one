import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import ClickADotModal from '../components/ClickADot/ClickADotModal';
import ClickADotMain from '../components/ClickADot/ClickADotMain';
import ClickADotDone from '../components/ClickADot/ClickADotDone';
function ClickAButtonPage() {
  const [isIntroOpen, setIntroOpen] = useState(true);
  const [isDone, setDone] = useState(false);
  
  return (
    <Layout>
      <SEO title="Thumb Singing" />
      {
        isIntroOpen &&
        <ClickADotModal setIntroOpen={setIntroOpen} />
      }
      <ClickADotMain 
        setDone={setDone}
      />
      {
        isDone &&
        <ClickADotDone />
      }
    </Layout>
  )
}

export default ClickAButtonPage;