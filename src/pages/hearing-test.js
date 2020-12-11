import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import HearingTestModal from '../components/HearingTest/HearingTestModal';
import HearingTestMain from '../components/HearingTest/HearingTestMain';
import HearingTestDone from '../components/HearingTest/HearingTestDone';

function HearingTestPage() {
  const [introOpen, setIntroOpen] = useState(true);
  const [isDone, setDone] = useState(false);

  return (
    <Layout>
      <SEO title="Hearing test" />
      {
        introOpen &&
        <HearingTestModal setIntroOpen={setIntroOpen} />
      }
      {
        !isDone && 
        <HearingTestMain setDone={setDone} />
      }
      {
        isDone &&
        <HearingTestDone />
      }
    </Layout>
  )
}

export default HearingTestPage;