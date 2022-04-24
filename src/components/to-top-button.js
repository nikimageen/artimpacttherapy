import React from 'react'

import * as styles from './to-top-button.module.css'

const ToTopButton = ({ visible, scrollToTop }) => (
  <button
    onClick={scrollToTop}
    className={styles.button}
    style={{display: visible ? 'inline' : 'none'}}>
    &#94;
  </button>
)

export default ToTopButton