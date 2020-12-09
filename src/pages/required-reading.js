import React, { useState, useContext } from 'react';
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

  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <p>RequiredReadingPage</p>
      <Bookshelf />
    </Layout>
  )
}

export default RequiredReadingPage;