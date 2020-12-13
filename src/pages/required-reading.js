import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import { Context } from '../context/GlobalContext';
import RequiredReadingMain from '../components/RequiredReading/RequiredReadingMain';
import RequiredReadingIntro from '../components/RequiredReading/RequiredReadingIntro';

function RequiredReadingPage() {
  const { setRequiredReadingDone } = useContext(Context);
  const [oneRead, setOneRead] = useState(false);
  const [twoRead, setTwoRead] = useState(false);
  const [threeRead, setThreeRead] = useState(false);
  const [fourRead, setFourRead] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);

  useEffect(() => {
    if (
      oneRead &&
      twoRead &&
      threeRead &&
      fourRead
    ) {
      setRequiredReadingDone(true);
    }
  }, [oneRead, twoRead, threeRead, fourRead])

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
      />
      {
        introOpen &&
        <RequiredReadingIntro setIntroOpen={setIntroOpen} />
      }
    </Layout>
  )
}

export default RequiredReadingPage;