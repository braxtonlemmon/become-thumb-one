import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from '../components/Welcome';
import Dashboard from '../components/Dashboard';
import { Context } from '../context/GlobalContext';

function IndexPage() {
  const { hasStarted } = useContext(Context);
  const [tasksDone, setTasksDone] = useState(false);
  
  return (
    <Layout>
      <SEO title="Home" />
      {
        hasStarted
        ? <Dashboard /> 
        : <Welcome  />
      }
      {
        tasksDone && <p>woohoo</p>
      }

    </Layout>
  )
}


export default IndexPage
