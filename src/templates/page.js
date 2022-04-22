import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './page.module.css'

const PageTemplate = props => {
  const page = get(props, 'data.contentfulPage')

  return (
    <Layout location={props.location}>
      <Seo
        title={page.title}
        description={page.description.childMarkdownRemark.excerpt}
        image={`http:${page.heroImage.resize.src}`}
      />
      <Hero
        image={page.heroImage?.gatsbyImageData}
        title={page.title}
        content={page.description?.childMarkdownRemark?.excerpt}
      />
      <div className={styles.container}>
        <div className={styles.article}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: page.body?.childMarkdownRemark?.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug(
    $slug: String!
  ) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
`
