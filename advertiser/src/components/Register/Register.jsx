import React, { useState } from 'react'
import './Register.css'
import {Link, Redirect} from 'react-router-dom'
import { requestRegister } from '../../api/request.api'
import axios from 'axios'

export default function Register() {
    const [detail, setDetail] = useState({
        email: '',
        password: ''
    })
    
    const [redirect, setRedirect] = useState(false)

    const handleChange = (e)=>{
        setDetail({...detail, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById('loader-up').classList.toggle("loader-show")
        axios({
            url: requestRegister,
            method: 'POST',
            data: {"email": detail.email, "password": detail.password},
          })
          .then(res=>{
            if (res.data.status==="SUCCESS"){
                alert("Registration successful, redirecting to the login page.")
                setInterval(()=>{
                    setRedirect(true)
                }, 2000);
                document.getElementById('loader-up').classList.toggle("loader-show")
            }
            else if (res.data.status==="ERROR"){
                document.getElementById('loader-up').classList.toggle("loader-show")
                return alert("Email already taken or password can not be blank.")
            }
          })
          .catch(error => {
            document.getElementById('loader-up').classList.toggle("loader-show")
            alert("Network Error");
            return

          });
    }
    if (localStorage.getItem("auth")==="true"){
        return <Redirect to='/ads'/>
    }
    if (redirect){
        return <Redirect to='/signin'/>
    }
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
            
            <form 
                className="m-3"
                onSubmit={handleSubmit}
            >
                <div className="row my-3">
                    <div className="col">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="E-mail" 
                            name="email"
                            value={detail.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            name="password"
                            value={detail.password}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                    <button 
                        type="submit"
                        className="btn button_custom w-100">Register</button>
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
