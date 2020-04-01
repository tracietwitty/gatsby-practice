import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Words</h1>
      <h2>this is the aboutness</h2>

      <p>
        More questions? <Link to="/contact">CONTACT ME</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
