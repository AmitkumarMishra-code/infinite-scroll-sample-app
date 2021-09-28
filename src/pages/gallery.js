import React from "react"
import InfiniteImages from "../components/InfiniteImages"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => {
    return (
      <Layout>
        <SEO title="Gallery" />
        <h1 className="is-size-3">Images from Unsplash...</h1>
        <p style={{ marginBottom: "5%" }}>
          Random Images from Unsplash. They will keep coming, as long as you keep scrolling...
        </p>
        <InfiniteImages />
      </Layout>
    )
  }
  
  export default Gallery