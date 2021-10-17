import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { requestAd } from '../../api/request.api'
import NavBar from '../../components/Nav/NavBar'
import Footer from '../../components/Footer/Footer'
import './Allads.css'
import { Link } from 'react-router-dom'

export default function Allads() {
    const [time, setTime] = useState(100)
    const [ads, setAds] = useState([])
    useEffect(() => {
        // set pooling 
        const interval = setInterval(() => {
            axios({
                url: requestAd,
                method: 'GET',
               
              })
              .then((res) => {
                if (res.data.status === 404) {
                    console.log(res.data)
                } else {
                    if (time===100){
                        setTime(5000);
                    }
                    
                    setAds(res.data.data)
                
                }
              })
              .catch((err) => {
                console.log(err.response);
              });
        }, time);
        // cleanup
        return () => clearInterval(interval);
    }, [time])

    const handleDelete = (e)=>{
        e.preventDefault();
        axios({
            url: `${requestAd}/${e.target.name}`,
            method: 'DELETE',
          })
          .then(res=>{
            if (res.data.status==="SUCCESS"){
                alert(res.data.message)

            }
            else if (res.data.status==="ERROR"){
                
                return alert("title/body wrong.")
            }
          })
          .catch(error => {
            alert("Network Error");
            return

          });    
    }
    return (
        <div className="container-fluid p-0 m-0">
            <NavBar />
            <div className="my-5"></div>
            
            <div className="row ad_container_ad py-3 p-0 m-0">
                <div className="col-md-3 col-sm-3 col-12"></div>

                <div className="col-md-6 col-sm-6 col-12 ">
                    {ads.map((i,index)=>(
                        <div className="serv_card ad_card m-4" key={index}>
                            <p className="title_heading_card small_heading_add mt-2">{i.title}</p>
                            <p className="title_heading_card ">{i.body}</p>
                            <p>{i.created_at? i.created_at.split("T")[1].split(":")[0]: "N/A"}: {i.created_at? i.created_at.split("T")[1].split(":")[1]: "N?A"}
                                &nbsp;&nbsp;
                                {i.created_at.split("T")[0]}</p>
                            <p className="title_heading_card ">Published by:{i.user.email}</p>
                            {localStorage.getItem("auth")==="true"?
                                <>
                                    <Link to={`/edit/ads/${i.id}`}>
                                        <button
                                            className="btn button_custom bg-fff fa fa-pencil mx-2"
                                        >
                                        </button>
                                    </Link>
                                    <button
                                        name={i.id}
                                        className="btn button_custom bg-fff fa fa-trash mx-2"
                                        onClick={handleDelete}
                                    >
                                    </button>
                                    
                                </>
                                : null
                            }
                        </div>
                        
                    ))}
                   
                </div>

                <div className="col-md-3 col-sm-3 col-12"></div>

            </div>

            <Footer />
        
        </div>
    )
}
