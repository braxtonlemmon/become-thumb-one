import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import YouAreThumbOne from '../components/Home/YouAreThumbOne';

function YouAreThumbOnePage() {
  return (
    <Layout>
      <SEO title="You are thumb one!" />
      <YouAreThumbOne />
    </Layout>
  )
}

export default YouAreThumbOnePage;