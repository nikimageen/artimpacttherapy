import React from 'react'
import GoToHome from './go-to-home'
import PageLinks from './page-links'
import * as styles from './navigation.module.css'

const Navigation = ({ location }) => {
  return (
    <>
      { location.pathname !== '/' && <GoToHome /> }
      <nav role="navigation" className={styles.container} aria-label="Main">
        <ul className={styles.navigation}>
          <PageLinks />
        </ul>
      </nav>
    </>
  )
}

export default Navigation
