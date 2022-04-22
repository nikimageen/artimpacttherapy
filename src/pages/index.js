import React from 'react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Landing from '../components/landing'

const RootIndex = ({ location }) => {
  return (
    <>
      <Landing />
      <Navigation location={location} />
      <Footer />
    </>
  )
}

export default RootIndex
