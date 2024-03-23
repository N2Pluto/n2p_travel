import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  return (
    <React.Fragment>
      <div className="w-screen">
        
      <Navbar />
        <div style={{paddingTop: '10px'}} className="min-h-[calc(100vh-70px-88px)]">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
