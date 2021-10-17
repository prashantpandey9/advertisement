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
                    <Link to='/ads'>
                    Ads
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
                {localStorage.getItem("auth")==="true"?
                    <>
                    <Link to="/add/ads">
                        <button 
                            className="btn button_custom mx-2"
                        > 
                        <i className="fa fa-plus"></i>
                        &nbsp;Publish Ad
                        </button>
                    </Link>
                    <span 
                        style={{maxWidth: "255px"}}
                        className="navbarmain-item px-4 my-auto">Hi! {localStorage.getItem("email")}</span>
                    <button 
                        className="btn button_custom bg-fff mx-2"
                        onClick={()=>{
                            return localStorage.setItem("auth", false)
                        }}
                    > 
                    Logout
                    </button>
                    </>
                    :
                    <>
                    <Link to='/register'>
                <button 
                    className="btn button_custom mx-2"    
                >   
                    Register
                </button>
                </Link>
                <Link to='/signin'>
                <button 
                    className="btn button_custom bg-fff mx-2"
                > 
                    Sign In 
                </button>
                </Link>
                </>
                }
            </div>
        </div>
    )
}
