import React from 'react'
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import GetToKnowYouForm from '../components/GetToKnowYou/GetToKnowYouForm';

function GetToKnowYouPage() {
  return (
    <Layout>
      <SEO title="Get to know you" />
      <GetToKnowYouForm />
    </Layout>
  )
}

export default GetToKnowYouPage;