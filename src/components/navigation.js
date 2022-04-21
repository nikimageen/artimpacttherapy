import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import * as styles from './navigation.module.css'

const Navigation = () => {
  const { title } = useSiteMetadata()
  
  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <span className={styles.logo}>
          <StaticImage src="../assets/images/logo.png" alt="Art Impact Therapy logo" />
        </span>
        <span className={styles.navigationItem}>{title}</span>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
