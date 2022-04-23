import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const Seo = ({ description = '', lang = 'hu', meta = [], title, image }) => {
  const { site } = useSiteMetadata()

  const metaDescription = description || site.description
  const defaultTitle = title || site?.title

  let metaProp = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: site?.social?.twitter || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)

  if (image) {
    metaProp.push(
      {
        name: `image`,
        content: image,
      },
      {
        property: `og:image`,
        content: image,
      }
    )
  }

  // noinspection JSUnresolvedVariable
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={metaProp}
    >
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#00aba9' />
      <meta name='theme-color' content='#ffffff' />
    </Helmet>
  )
}

export default Seo
