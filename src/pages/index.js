import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Infinite Scroll Demo</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        Click below to start loading infinite images!
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Load
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage