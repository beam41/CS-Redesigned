/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./img-panel.module.scss"

const ImgPanel = () => {
  return (
    <div className={styles.img_panel_cover}>
      <div className={styles.gradient_cover}></div>
      <div className={styles.img_panel} role="computer science image">
        {/* row1 */}
        <div className={styles.trans}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* row2 */}
        <div></div>
        <div></div>
        <div className={styles.trans}></div>
        <div></div>
        <div></div>
        {/* row3 */}
        <div className={styles.trans}></div>
        <div></div>
        <div></div>
        <div className={styles.trans}></div>
        <div></div>
      </div>
    </div>
  )
}

export default ImgPanel
