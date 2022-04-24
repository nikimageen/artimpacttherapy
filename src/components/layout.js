import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ children, location }) => (
  <>
    <Seo />
    <Navigation location={location} />
    <main>{children}</main>
    <Footer location={location} />
  </>
)

export default Layout
