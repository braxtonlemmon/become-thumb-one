import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import FormContainer from '../components/GetToKnowYou/FormContainer';
import GetToKnowYouForm from '../components/GetToKnowYouForm';

function GetToKnowYouPage() {
  return (
    <Layout>
      <SEO title="Get to know you" />
      <GetToKnowYouForm />
    </Layout>
  )
}

export default GetToKnowYouPage;