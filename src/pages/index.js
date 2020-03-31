import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Words</h1>
      <h2>this is the about me and home page</h2>

      <p>
        Need a dev? <Link to="/contact">CONTACT ME</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
