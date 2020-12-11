import React, { useEffect, useContext } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Welcome from '../components/Home/Welcome';
import Dashboard from '../components/Home/Dashboard';
import { Context } from '../context/GlobalContext';

function IndexPage() {
  const { 
    hasStarted, 
    tasksDone,
    setTasksDone,
    requiredReadingDone,
    hearingTestDone,
    clickADotDone,
    thumbSingingDone
  } = useContext(Context);
  
  useEffect(() => {
    if (
      requiredReadingDone &&
      hearingTestDone &&
      clickADotDone &&
      thumbSingingDone
    ) {
      navigate("/you-are-thumb-one");
    }
  }, [
    requiredReadingDone,
    hearingTestDone,
    clickADotDone,
    thumbSingingDone,
  ])

  return (
    <Layout>
      <SEO title="Home" />
      {
        hasStarted
        ? <Dashboard /> 
        : <Welcome  />
      }
    </Layout>
  )
}


export default IndexPage
