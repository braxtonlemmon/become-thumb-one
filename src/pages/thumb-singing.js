import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ThumbSingingModal from '../components/ThumbSingingModal';

function ThumbSingingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Thumb Singing" />
      <p>ThumbSingingPage</p>
      <button onClick={() => setModalOpen(true)}>Start</button>
      {
        modalOpen &&
        <ThumbSingingModal setModalOpen={setModalOpen} />
      }
    </Layout>
  )
}

export default ThumbSingingPage;