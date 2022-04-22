import React from 'react'
import { Link } from 'gatsby'
import GoToHome from './go-to-home'
import * as styles from './navigation.module.css'

const Navigation = ({ location }) => (
  <>
    { location.pathname !== '/' && <GoToHome /> }
    <nav role="navigation" className={styles.container} aria-label="Main">
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Navigation
