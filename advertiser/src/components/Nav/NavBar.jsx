import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="container mt-3">
            <div className="navbarmain">
                <span className="my-auto ad_icon pe-4">Ad Agency</span>
                <span className="navbarmain-item px-4 my-auto">
                    <Link to='/'>
                    Home
                    </Link>
                </span>
                
                <span className="navbarmain-item px-4 my-auto">
                    <Link to='/'>
                    Services
                    </Link>
                </span>
                <span className="navbarmain-item px-4 my-auto">
                    <Link to='/'>
                    Contact
                    </Link>
                </span>
                <Link to='/register'>
                <button 
                    className="btn button_custom mx-4"    
                >   
                    Register
                </button>
                </Link>
                <Link to='/signin'>
                <button 
                    className="btn button_custom bg-fff mx-4"
                > 
                    Sign In 
                </button>
                </Link>
            </div>
        </div>
    )
}
