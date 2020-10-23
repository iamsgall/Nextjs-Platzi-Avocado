import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
    children?: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout