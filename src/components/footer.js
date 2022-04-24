import React from 'react'

import * as styles from './footer.module.css'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Footer = ({ location }) => {
  const { site } = useSiteMetadata()
  
  return (
    <div className={location.pathname === '/' ? styles.containerMain : styles.container}>
      <div>&#169; {site.title}</div>
      <div>
        <a href="https://benomatis.com" rel="noreferrer" target="_blank">benomatis.com</a>
      </div>
    </div>
  )
}

export default Footer
