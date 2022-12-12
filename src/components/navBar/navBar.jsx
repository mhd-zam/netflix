import React, { useEffect, useState } from "react";
import logo from "../../assets/netflix-logo.png";
import "../navBar/navBar.css";
import { imageUrl } from "../../constant/constant";
import profile from "../../assets/9f7528a7083f48cf599f23b8c0aa2ca7.jpg";
import axios from '../../axios/axios'
import { trending } from "../../constant/constant";
function NavBar() {
  const [index,indexSet]=useState(1)
  const [cover, coverSet] = useState()
  useEffect(() => {
    axios.get(trending).then((response) => {
      coverSet(response.data.results)
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (index <18) {
        indexSet(index+1)
      } else {
        indexSet(1)
    } 
    }, 5000);
  }, [index])
  
  
  return (
    <div>
      <header>
        <div className="navbar">
          <div style={{backgroundImage:`url(${cover? imageUrl+cover[index].backdrop_path:''})`}} className="cover">
            <h1 className="title">{cover ? cover[index].title||cover[index].name:''}</h1>
          <div className="buttons">
              <button className="button"><i className="fa-solid fa-play"></i>play</button>
              <button className="button"><i className="fa-solid fa-plus"></i>My List</button>
            </div>
            <h1 className="description">{cover?cover[index].overview:''}</h1>
            <div className="logopart">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
              </ul>
            </div>
            <div className="center"></div>
            <div className="rightmenu">
              <ul>
                <li>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li>KIDS</li>
                <li>DVD</li>
                <li>
                  <i className="fa-solid fa-bell"></i>
                </li>
              </ul>
            </div>
            <img className="profile" src={profile} alt="" />
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default NavBar;
