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
            allContentfulPage(sort: {fields: orderId}) {
                nodes {
                    title
                    slug
                    orderId
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
