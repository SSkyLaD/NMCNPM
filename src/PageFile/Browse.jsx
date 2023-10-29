import React from "react";
import Searchbar from "./Searchbar";
import daily1 from '../assets/daily1.jpg';
import daily2 from '../assets/daily2.jpg';
import daily3 from '../assets/daily3.jpg';
import daily4 from '../assets/daily4.jpg';
import tryImage from '../assets/83aa0d456bbf04f7a9b30534516f97aa.jpg';
import musicImage from'../assets/64daede6461d984581a5f18a3d1d72b7.jpg'
import './Browse.css';

export default function Browse(){
    return(
        <div className="browse">
            <Searchbar/>
            <div className="content">
                <div className="day-recomend">
                    <h1>Good Evening</h1>
                    <div className="card-container">
                        <div className="recomend-card">
                            <img src={daily1} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily3} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily4} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily2} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily4} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily1} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily3} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>
                        <div className="recomend-card">
                            <img src={daily1} alt="" />
                            <p>A Head full of Dreams</p>
                        </div>   
                    </div>
                </div>
                <div className="show-to-try">
                    <h1>Show to try</h1>
                    <div className="card-container">
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                        <div className="card">
                            <img src={tryImage} alt="" />
                            <h4>Album</h4>
                            <p>album</p>
                        </div>
                    </div>
                </div>
                <div className="artist">
                    <h1>Artist</h1>
                    <div className="card-container">
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                        <div className="card">
                            <img src={musicImage} alt="" />
                            <h4>Name</h4>
                            <p>artist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}