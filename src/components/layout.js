import React, { useState } from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import ToTopButton from './to-top-button'

const Layout = ({ children, location }) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
      <Seo />
      <Navigation location={location} />
      <main>{children}</main>
      <Footer location={location} />
      <ToTopButton visible={visible} scrollToTop={scrollToTop} />
    </>
  )
}

export default Layout
