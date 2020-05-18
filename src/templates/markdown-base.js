import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { renderHtmlToReact } from "../util/html-to-react"

import styles from "./markdown-base.module.scss"

export default ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <article className={styles.markdown}>
      <section>{renderHtmlToReact(data.markdownRemark.htmlAst)}</section>
    </article>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
