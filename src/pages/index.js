import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Welcome from '../components/Home/Welcome';
import Dashboard from '../components/Home/Dashboard';
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
