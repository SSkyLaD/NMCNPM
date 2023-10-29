import React from "react";
import './Home.css'
import Searchbar from "./Searchbar";
import cornerImage from '../assets/2ed709169619a31ef692521f740b07f8.jpg'
import cornerImage1 from '../assets/Frame 199.png'


export default function Home(){
    return(
        <div className="home">
            <Searchbar/>
            <div className="content">
                <div className="top-genres">
                    <h1>Your top genres</h1>
                    <div className="card-container">
                        <div className="card" style={{backgroundColor:"#8769A7"}}>
                            <h2>Pop</h2>
                            <img src={cornerImage} alt="" />
                        </div>
                        <div className="card" style={{backgroundColor:"#CA3189"}}>
                            <h2>Dance / Electronic</h2>
                            <img src={cornerImage} alt="" />
                        </div>                        
                        <div className="card" style={{backgroundColor:"#AE6225"}}>
                            <h2>Hip Hop</h2>
                            <img src={cornerImage} alt="" />
                        </div>                        
                        <div className="card" style={{backgroundColor:"orangered"}}>
                            <h2>Rock</h2>
                            <img src={cornerImage} alt="" />
                        </div>
                        <div className="card" style={{backgroundColor:"blue"}}>
                            <h2>Jazz</h2>
                            <img src={cornerImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="browse-all">
                    <h1>Browse all</h1>
                    <div className="card-container">
                        <div className='card' style={{backgroundColor:'#44836C'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'#223161'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'#CF4421'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'#D5325D'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'#777'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'orange'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'cyan'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'pink'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'orangered'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'purple'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'wheat'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                        <div className='card' style={{backgroundColor:'gray'}}>
                            <h2>Something</h2>
                            <img src={cornerImage1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}