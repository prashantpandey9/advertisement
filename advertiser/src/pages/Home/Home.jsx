import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import Jumbo from '../../components/Jumbo/Jumbo'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <>
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="my-5"></div>
            <Jumbo />
            <div className="my-5"></div>
            <Services />
            <div className="my-5"></div>
            <Footer />
            
        </div>
        </>
    )
}
