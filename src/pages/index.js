import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    </div>
  </Layout>
)

export default IndexPage
