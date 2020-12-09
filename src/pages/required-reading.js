import React, { useContext } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Context } from '../context/GlobalContext';

function RequiredReadingPage() {
  const { setRequiredReadingDone } = useContext(Context);
  
  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <p>RequiredReadingPage</p>
      <p onClick={() => {
        setRequiredReadingDone(true);
      }}>click</p>
    </Layout>
  )
}

export default RequiredReadingPage;