import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Context } from '../context/GlobalContext';
import Bookshelf from '../components/Bookshelf';

function RequiredReadingPage() {
  const { setRequiredReadingDone } = useContext(Context);
  const [oneRead, setOneRead] = useState(false);
  const [twoRead, setTwoRead] = useState(false);
  const [threeRead, setThreeRead] = useState(false);
  const [fourRead, setFourRead] = useState(false);

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
      <p>RequiredReadingPage</p>
      <Bookshelf 
        setOneRead={setOneRead}
        setTwoRead={setTwoRead}
        setThreeRead={setThreeRead}
        setFourRead={setFourRead}
      />
    </Layout>
  )
}

export default RequiredReadingPage;