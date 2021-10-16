import React from 'react'
import './Jumbo.css'

export default function Jumbo() {
    return (
        <div className="container-fluid bg-green">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 col-12 jumbo m-0">
                    <p className="">TOP LEVEL TEAM</p>
                    <p className="main_heading">#1 ADVERTISING</p>
                    <p className="main_heading_small">AGENCY IN RANIKHET</p>
                    <p>We are an award-winning Marketing Agency that always delivers positive results to their cutomers.</p>
                    <button className="btn button_custom bg-fff"> Contact Us </button>
                </div>
            </div>
        </div>
    )
}
