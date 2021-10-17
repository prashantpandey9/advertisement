import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import Footer from '../../components/Footer/Footer'
import Register from '../../components/Register/Register'
import Loader from '../../components/Loader/Loader'

export default function Signup() {
    return (
        <>
        <Loader />
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="my-5"></div>
            <Register />
            <Footer />
            
        </div>
        </>
    )
}
