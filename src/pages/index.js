import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgPanel from "../components/img-panel"

import styles from "../styles/pages/index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class={styles.index}>
      <h1>
        CS
        <br />
        CMU
      </h1>
      <ImgPanel />
    </div>
  </Layout>
)

export default IndexPage
