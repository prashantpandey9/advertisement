import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div className="modal_container p-5" id="register">
            <div className="modal_container_card">
            <div className="row my-3">
                <div className="col">
                    <button className="btn button_custom m-3">Register</button>
                </div>
                <div className="col text-end">
                    <button 
                        className="fa fa-close button_custom bg-fff btn m-3"
                    >
                        
                    </button>
                </div>
                
            </div>
            
            <form className="m-3">
                <div className="row my-3">
                    <div className="col">
                        <input type="email" className="form-control" placeholder="E-mail" />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                    <button className="btn button_custom w-100">Register</button>
                    </div>
                    
                </div>
                <div className="text-center">or</div>
                <div className="row my-3">
                    <div className="col">
                        <Link to='/signin'>
                            <button 
                            type="text"
                            className="btn button_custom bg-fff w-100"
                        > Sign In </button>
                        </Link>
                    </div>
                    
                </div>

            </form>
            </div>
        </div>
    )
}
