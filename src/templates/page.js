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
        image={`http:${page.heroImage.resize.src ?? null}`}
      />
      <div className={styles.details}>
        <h1 className={styles.title}>{page.title}</h1>
      </div>
      <Hero
        image={page.heroImage?.gatsbyImageData ?? null}
        title={page.title}
        body={page.body}
      />
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
