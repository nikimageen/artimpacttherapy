import React from 'react'

import Seo from '../components/seo'
import Landing from '../components/landing'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const RootIndex = ({ location }) => (
  <>
    <Seo />
    <Landing />
    <Navigation location={location} />
    <Footer />
  </>
)

export default RootIndex
