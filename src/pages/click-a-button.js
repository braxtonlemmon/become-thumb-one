import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import ClickADotModal from '../components/ClickADot/ClickADotModal';
import ClickADotMain from '../components/ClickADot/ClickADotMain';

function ClickAButtonPage() {
  const [isIntroOpen, setIntroOpen] = useState(true);
  
  return (
    <Layout>
      <SEO title="Thumb Singing" />
      {
        isIntroOpen &&
        <ClickADotModal setIntroOpen={setIntroOpen} />
      }
      <ClickADotMain />
    </Layout>
  )
}

export default ClickAButtonPage;