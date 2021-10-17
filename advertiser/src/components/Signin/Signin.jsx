import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../Register/Register.css'
import axios from 'axios'
import { requestLogin } from '../../api/request.api'

export default function Signin() {
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
            url: requestLogin,
            method: 'POST',
            data: {"email": detail.email, "password": detail.password},
          })
          .then(res=>{
            if (res.data.status==="SUCCESS"){
                alert("Login successful!")
                localStorage.setItem("auth", true)
                localStorage.setItem("email", detail.email)
                setInterval(()=>{
                    setRedirect(true)
                }, 1000);
                document.getElementById('loader-up').classList.toggle("loader-show")
            }
            else if (res.data.status==="ERROR"){
                document.getElementById('loader-up').classList.toggle("loader-show")
                return alert("Email/Password wrong.")
            }
          })
          .catch(error => {
            document.getElementById('loader-up').classList.toggle("loader-show")
            alert("Network Error");
            return

          });
    }

    if (redirect){
        return <Redirect to='/ads'/>
    }
    
    return (
        <div className="modal_container p-5" id="Sign In">
            <div className="modal_container_card">
            <div className="row my-3">
                <div className="col">
                    <button className="btn button_custom m-3">Sign In</button>
                </div>
                <div className="col text-end">
                    <button 
                        className="fa fa-close button_custom bg-fff btn m-3"
                    >
                        
                    </button>
                </div>
                
            </div>
            
            <form 
                onSubmit={handleSubmit}
                className="m-3">
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
                            name="password"
                            value={detail.password}
                            onChange={handleChange}
                            autoComplete="off"
                            type="password" 
                            className="form-control" 
                            placeholder="Password" />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                    <button
                        type="submit" 
                        className="btn button_custom w-100"
                    >Sign In</button>
                    </div>
                    
                </div>
                <div className="text-center">or</div>
                <div className="row my-3">
                    <div className="col">
                        <Link to='/register'>
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
