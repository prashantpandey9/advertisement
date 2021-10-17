import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Register/Register.css'
import axios from 'axios'
import { requestAd } from '../../api/request.api'

export default function Publish() {
    const [detail, setDetail] = useState({
        title: '',
        body: ''
    })
    
    const [redirect, setRedirect] = useState(false)

    const handleChange = (e)=>{
        setDetail({...detail, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById('loader-up').classList.toggle("loader-show")
        axios({
            url: requestAd,
            method: 'POST',
            data: {"title": detail.title, "body": detail.body},
          })
          .then(res=>{
            if (res.data.status==="SUCCESS"){
                alert(res.data.message)

                setInterval(()=>{
                    setRedirect(true)
                }, 1000);
                document.getElementById('loader-up').classList.toggle("loader-show")
            }
            else if (res.data.status==="ERROR"){
                document.getElementById('loader-up').classList.toggle("loader-show")
                return alert("title/body wrong.")
            }
          })
          .catch(error => {
            document.getElementById('loader-up').classList.toggle("loader-show")
            alert("Network Error");
            return

          });
    }
    if (localStorage.getItem("auth")==="false"){
        return <Redirect to='/ads'/>
    }
    if (redirect){
        return <Redirect to='/ads'/>
    }
    
    return (
        <div className="modal_container p-5" id="Add Advertisement">
            <div className="modal_container_card">
            <div className="row my-3">
                <div className="col">
                    <button className="btn button_custom m-3">Add Advertisement</button>
                </div>
                
            </div>
            
            <form 
                onSubmit={handleSubmit}
                className="m-3">
                <div className="row my-3">
                    <div className="col">
                        <input 
                        
                            type="title" 
                            className="form-control" 
                            placeholder="Title" 
                            name="title"
                            value={detail.title}
                            onChange={handleChange}
                            autoComplete="off"
                     />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                        <textarea 
                            name="body"
                            value={detail.body}
                            onChange={handleChange}
                            autoComplete="off"
                            type="body" 
                            className="form-control" 
                            placeholder="body" />
                    </div>
                    
                </div>
                <div className="row my-3">
                    <div className="col">
                    <button
                        type="submit" 
                        className="btn button_custom w-100"
                    >Add Advertisement</button>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    )
}
