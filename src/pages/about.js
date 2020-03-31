import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Words</h1>
      <h2>this is the aboutness</h2>

      <p>
        More questions? <Link to="/contact">CONTACT ME</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
