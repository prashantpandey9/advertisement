import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="container-fluid bg-blue">
            <div className="social_icon_bar">
                <div className="social_icon mx-2 text-center">
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="social_icon mx-2 text-center">
                    <i className="fa fa-linkedin"></i>
                </div>
                <div className="social_icon mx-2 text-center">
                    <i className="fa fa-twitter"></i>
                </div><div className="social_icon mx-2 text-center">
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
