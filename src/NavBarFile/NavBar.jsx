import React from 'react';
import './NavBar.css';

export default function NavBar(props){
    const [playlist,setPlayList] = React.useState(['Chill', 'Lofi'])


    const playlistHTML = playlist.map((element,index)=>{
        return(
            <div className='button' key={index}>
                <p>{element}</p>
            </div>
        )
    })
    return(
        <div className='navbar'>
            <div className='main-nav'>
                <div className='button' onClick={()=>props.changePage('Home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 29 31" fill="none">
                        <path d="M2 29H10.5794V20.6729H14.743H18.6542V29H27.2336V12.7899L14.6168 2L2 12.7899V29Z" stroke="#191414"/>
                        <path d="M2 29H10.5794V20.6729H14.743H18.6542V29H27.2336V12.7899L14.6168 2L2 12.7899V29Z" stroke="#F1F1F1"/>
                    </svg>
                    <p>Home</p>
                </div>
                <div className='button' onClick={()=>props.changePage('Browse')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 25" fill="none">
                        <path d="M5.8 1H23.8M1 4H29L25 24H5L1 4ZM20 13.7C20 16.4614 17.7614 18.7 15 18.7C12.2386 18.7 10 16.4614 10 13.7C10 10.9386 12.2386 8.7 15 8.7C17.7614 8.7 20 10.9386 20 13.7Z" stroke="#191414" />
                        <path d="M5.8 1H23.8M1 4H29L25 24H5L1 4ZM20 13.7C20 16.4614 17.7614 18.7 15 18.7C12.2386 18.7 10 16.4614 10 13.7C10 10.9386 12.2386 8.7 15 8.7C17.7614 8.7 20 10.9386 20 13.7Z" stroke="#F1F1F1" />
                    </svg>
                    <p>Browse</p>
                </div>
                <div className='button' onClick={()=>props.changePage('MyCloud')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 31" fill="none">
                        <path d="M7.44074 4.44834C3.44052 7.35467 1.44041 8.80784 0.65485 10.9544C0.591833 11.1266 0.535152 11.301 0.484921 11.4774C-0.141247 13.6757 0.622727 16.0269 2.15068 20.7295C3.67863 25.432 4.4426 27.7833 6.24132 29.1937C6.38561 29.3069 6.53401 29.4147 6.6862 29.517C7.32618 29.947 8.03159 30.232 8.87525 30.4208V25.2295C8.87525 21.2945 12.0652 18.1045 16.0002 18.1045C19.9353 18.1045 23.1252 21.2945 23.1252 25.2295V30.4208C23.9689 30.232 24.6743 29.947 25.3143 29.517C25.4665 29.4147 25.6149 29.3069 25.7592 29.1937C27.5579 27.7833 28.3219 25.432 29.8498 20.7295C31.3778 16.0269 32.1418 13.6757 31.5156 11.4774C31.4654 11.301 31.4087 11.1266 31.3457 10.9544C30.5601 8.80784 28.56 7.35468 24.5598 4.44835C20.5596 1.54202 18.5594 0.0888378 16.2752 0.00504157C16.092 -0.00168052 15.9085 -0.00168052 15.7253 0.00504157C13.4411 0.0888377 11.441 1.54201 7.44074 4.44834Z" fill="white"/>
                        <path d="M20.8752 30.7098V25.2295C20.8752 22.5371 18.6926 20.3545 16.0002 20.3545C13.3079 20.3545 11.1252 22.5371 11.1252 25.2295V30.7098C12.4347 30.7918 14.019 30.7918 16.0003 30.7918C17.9815 30.7918 19.5658 30.7918 20.8752 30.7098Z" fill="white"/>
                    </svg>
                    <p>My cloud</p>
                </div>
            </div>
            <div className='your-library-nav'>
                <p>YOU LIBRARY</p>
                <div className='button'>
                    <p>Made for you</p>
                </div>
                <div className='button'>
                    <p>Recent played</p>
                </div>
                <div className='button'>
                    <p>Albums</p>
                </div>
                <div className='button'>
                    <p>Artist</p>
                </div>
                <div className='button'>
                    <p>Local files</p>
                </div>
                <div className='button'>
                    <p>Postcard</p>
                </div>
            </div>
            <div className='playlist-nav'>
                <p>PLAYLIST</p>
                <div className='add-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19 20" fill="none">
                        <path d="M1.07239 9.60663C1.07239 9.51011 1.15063 9.43187 1.24714 9.43187L9.31052 9.43187L9.31052 1.36849C9.31052 1.27198 9.38877 1.19373 9.48528 1.19373C9.5818 1.19373 9.66004 1.27198 9.66004 1.36849L9.66004 9.43187L17.7234 9.43187C17.8199 9.43187 17.8982 9.51011 17.8982 9.60663C17.8982 9.70314 17.8199 9.78139 17.7234 9.78139L9.66004 9.78139L9.66004 17.8448C9.66004 17.9413 9.5818 18.0195 9.48528 18.0195C9.38877 18.0195 9.31052 17.9413 9.31052 17.8448L9.31052 9.78139L1.24714 9.78139C1.15063 9.78139 1.07239 9.70314 1.07239 9.60663Z" fill="#F1F1F1" stroke="#F1F1F1"/>
                    </svg>
                    <p>NEW PLAYLIST</p>
                </div>
                {playlistHTML}
            </div>
        </div>
    )
}