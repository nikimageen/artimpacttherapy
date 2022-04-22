import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import * as styles from './page-links.module.css'

const PageLinks = () => {
  const { pages } = useSiteMetadata()
  
  return pages.map((page, i) => (
    <li key={i} className={styles.navigationItem}>
      <Link to={`/${page.slug}/`} activeClassName="active">
        {page.title}
      </Link>
    </li>
  ))
}

export default PageLinks