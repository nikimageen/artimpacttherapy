import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './landing.module.css'

const Landing = () => (
  <div className={styles.container}>
    <StaticImage src="../assets/images/logo.svg" alt="Art Impact Therapy logo" />
  </div>
)

export default Landing