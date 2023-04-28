import React from 'react'

export default function Newsitems(props) {
    let {mode, title, despription, newurl, imageurl, time, author, source} = props;
  return (
    <div className={`card mx-auto bg-${mode} text-${mode==="dark"?"light":"dark"}`} style={{width: "20rem", height: "100%"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
            <img src={imageurl===null?'https://logopond.com/logos/33c9b6e0e65cdba90cd5f822851d26c6.png':imageurl} className="card-img-top" alt="..."/>
            <div className="card-body mb-0">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{despription}</p>
            </div>
            <div className='m-3'>
                <div className='mt-0 mb-2'> 
                <div style={{fontSize:"12px",fontFamily:"sans-serif"}} >Author: <span style={{color:"#7e37ff"}}>{author?author:"Unknown"}</span></div>
                <div style={{fontSize:"12px",fontFamily:"sans-serif"}} >Date: <span style={{color:"#7e37ff"}}>{new Date(time).toGMTString()}</span></div>
                </div>
                <a href={newurl} className={`btn btn-sm ${mode === "dark"?"btn-outline-light":"btn-dark"}`}>read more</a>
            </div>
          </div>
  )
}
