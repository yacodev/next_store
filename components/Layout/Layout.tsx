import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps = {
  children?:React.ReactNode
}

const Layout:React.FC = ({children}:LayoutProps) => {
  return (
    <div className='container'>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
