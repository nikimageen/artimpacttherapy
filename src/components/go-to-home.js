import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import * as styles from './go-to-home.module.css'

const GoToHome = () => {
  const { title } = useSiteMetadata()
  
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoLink}>
          <span className={styles.logo}>
            <StaticImage src="../assets/images/logo.png" alt="Art Impact Therapy logo" />
          </span>
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default GoToHome
