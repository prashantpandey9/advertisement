import React from 'react'
import './Services.css'

export default function Services() {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <p className="title_heading_card">OUR SERVICES</p>
                    <p className="main_heading_small"> <span className="fw-bold">What </span>we do</p>
                    <p className="small_heading_bold">Our advertising agency provides wide specter of services for medical and insurance industry. Get a free consultation with a marketing expert to discover opportunities for you type of products or services.</p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <div className="serv_card">
                        <i className="fa fa-bars"></i>
                    <p className="title_heading_card mt-2">Digital advertising</p>
    
                    <p className="small_heading_bold">Looking for someone to help you with your ads? We are proficient in SEM, SMM, any kind of display</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <div className="serv_card">
                        <i className="fa fa-group"></i>
                    <p className="title_heading_card mt-2">Team management</p>
    
                    <p className="small_heading_bold">
                        We willl help you to build an authentic community among your customers, employees, and partners
                    </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <div className="serv_card">
                    <i className="fa fa-comments-o"></i>
                    <p className="title_heading_card mt-2">Training and consulting</p>
    
                    <p className="small_heading_bold">We are proficient in coaching and consulting. Our team provide best learning and development solutions</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <div className="serv_card">
                        <i className="fa fa-filter"></i>
                    <p className="title_heading_card mt-2">Full funnel build</p>
    
                    <p className="small_heading_bold">We will build a well designed and properly executed sales funnel, which help your business to convert</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-2">
                    <div className="serv_card">
                        <i className="fa fa-bullseye"></i>
                    <p className="title_heading_card mt-2">Marketing strategy</p>
    
                    <p className="small_heading_bold">Our team knows everything about reaching prospective consumers and turning them into customers of the services your business provides.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
