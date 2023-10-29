import React from "react";
import './App.css';
import NavBar from "./NavBarFile/NavBar";
import Player from "./PlayerFile/Player";
import Home from "./PageFile/Home";
import Browse from "./PageFile/Browse";
import MyCloud from "./PageFile/MyCloud";

export default function App(){
  const [page, setPage] = React.useState('Home');
  let pageComponent;

  function changePage(vaule){
    setPage(vaule);
  }

  switch (page) {
    case 'Home':
      pageComponent = <Home/>;
      break;
    case "Browse":
      pageComponent = <Browse/>;
      break;
    case 'MyCloud':
      pageComponent =<MyCloud/>;
  }
  return(
    <div>
      <div className="main-page-container">
        <NavBar
          changePage={changePage}
        />
        {pageComponent}
      </div>
      <div className="player-container">
        <Player/>
      </div>
    </div>
  )
}