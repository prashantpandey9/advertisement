import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'
import Publish from '../../components/Publish/Publish'

export default function PublishForm() {
    return (
        <>
        <Loader />
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="my-5"></div>
            <Publish />
            <Footer />
            
        </div>
        </>
    )
}
