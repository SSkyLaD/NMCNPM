import React from "react"
import './Searchbar.css'
import userImage from '../assets/userimage.jpg'

export default function Searchbar(){
    return(
        <div className="searchbar">
            <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black"/>
                    <path d="M20.9999 21L16.6499 16.65" stroke="black"/>
                </svg>
                <input type="text" placeholder=" Artists, songs, or podcasts"/>
            </div>
            <div className="right">
                <button>CONNECT</button>
                <div className="user">
                    <img src={userImage} alt="" />
                    <p>USER</p>
                </div>
            </div>
        </div>
    )
}