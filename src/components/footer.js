import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Footer = () => {
  const { title } = useSiteMetadata()
  
  return (
    <Container as="footer">
      <div className={styles.container}>
        <div>&#169; {title}</div>
        <div>
          <a href="https://benomatis.com" rel="noreferrer" target="_blank">benomatis.com</a>
        </div>
      </div>
    </Container>
  )
}

export default Footer
