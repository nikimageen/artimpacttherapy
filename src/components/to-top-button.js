import React from 'react'

import * as styles from './to-top-button.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const ToTopButton = ({ visible, scrollToTop }) => (
  <div className={styles.wrapper}>
    <button
      onClick={scrollToTop}
      className={visible ? styles.fadeIn : styles.fadeOut }>
      <StaticImage
        backgroundColor='transparent'
        src='../assets/images/logo_invert_arrow.svg'
        alt='Art Impact Therapy logo with upward arrow' />
    </button>
  </div>
)

export default ToTopButton