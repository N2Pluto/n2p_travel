import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar'
import Copyright from './Copyright'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar2 />
      <div className='min-h-[calc(100vh-10px-8px)] pt-12 never-used box-content'>{children}</div>
      <Footer />
      <Copyright />
    </React.Fragment>
  )
}

export default Layout
