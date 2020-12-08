import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../components/Welcome';
import Dashboard from '../components/Dashboard';

function IndexPage() {
  const [hasStarted, setStarted] = useState(false);
  
  return (
    <Layout>
      <SEO title="Home" />
      {
        hasStarted ? <Dashboard /> : <Welcome />
      }
    </Layout>
  )
}


export default IndexPage
