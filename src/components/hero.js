import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, body }) => (
  <>
    <div className={styles.hero}>
      {image && (
        <GatsbyImage className={styles.image} alt={title} image={image} />
      )}
      <div className={styles.container}>
        <div className={styles.article}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: body?.childMarkdownRemark?.html,
            }}
          />
        </div>
      </div>
    </div>
  </>
)

export default Hero
