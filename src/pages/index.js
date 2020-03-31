import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Words</h1>
      <h2>this is the about me and home page</h2>

      <p>
        Need a dev? <Link to="/contact">CONTACT ME</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
