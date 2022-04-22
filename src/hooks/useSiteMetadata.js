import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site, allContentfulPage } = useStaticQuery(
    graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            allContentfulPage {
                nodes {
                    title
                    slug
                }
            }
        }
    `
  )
  
  return {
    site: site.siteMetadata,
    pages: allContentfulPage.nodes
  }
}
