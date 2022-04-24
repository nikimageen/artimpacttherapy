import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const FourOFour = ({ location }) => (
  <Layout location={location}>
    <Seo
      title="Az oldal nem található"
      description="Az oldal nem található"
    />
    <div style={{ textAlign: 'center', padding: 20 }}>Hoppá, valamit elírhattál. Sajna ilyen oldalunk nincsen...</div>
  </Layout>
)

export default FourOFour