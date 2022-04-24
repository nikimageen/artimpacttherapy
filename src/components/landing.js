import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './landing.module.css'

const Landing = () => (
  <div className={styles.container}>
    <StaticImage
      backgroundColor="#F8F8F8"
      src="../assets/images/logo_with_text.svg"
      alt="Art Impact Therapy logo with text" />
  </div>
)

export default Landing