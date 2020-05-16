/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styles from "./navbar.module.scss"

const LinkObj = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <div className={styles.link_cover}>{children}</div>
      <div className={styles.link_bg}></div>
    </Link>
  )
}

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryNavbar {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.navbar}>
      <div className={styles.header_title_cover}>
        <Link className={styles.header_title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </div>

      <nav className={styles.navbar_nav}>
        <LinkObj to="/about">About</LinkObj>
        <LinkObj to="/programs">Programs</LinkObj>
        <LinkObj to="/courses">Courses</LinkObj>
      </nav>
    </header>
  )
}

export default Navbar
