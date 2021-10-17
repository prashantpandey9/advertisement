import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import Footer from '../../components/Footer/Footer'
import Loader from '../../components/Loader/Loader'
import Edit from '../../components/Edit/Edit'

export default function EditForm() {
    return (
        <>
        <Loader />
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="my-5"></div>
            <Edit />
            <Footer />
            
        </div>
        </>
    )
}
