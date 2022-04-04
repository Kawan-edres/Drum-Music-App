import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Crash from "../Images/crash.png";
import Kick from "../Images/kick.png";
import Snare from "../Images/snare.png";
import Tom1 from "../Images/tom1.png";
import Tom2 from "../Images/tom2.png";
import Tom3 from "../Images/tom3.png";
import Tom4 from "../Images/tom4.png";

import Cr from "../Sounds/crash.mp3";
import K from "../Sounds/kick.mp3";
import S from "../Sounds/snare.mp3";
import T1 from "../Sounds/tom1.mp3";
import T2 from "../Sounds/tom2.mp3";
import T3 from "../Sounds/tom3.mp3";
import T4 from "../Sounds/tom4.mp3";
import Footer from "./Fotter";



const Body = () => {
  const cr = new Audio(Cr);
  const k = new Audio(K);
  const s = new Audio(S);
  const t1 = new Audio(T1);
  const t2 = new Audio(T2);
  const t3 = new Audio(T3);
  const t4 = new Audio(T4);

  document.addEventListener("keypress", function (event) {
    playy(event.key);
    animation(event.key);
  });


  const playy = (key) => {
    switch (key) {
      case "w":
        cr.play();
        break;

      case "a":
        k.play();
        break;

      case "s":
        s.play();
        break;

      case "d":
        t1.play();
        break;

      case "f":
        t2.play();
        break;

      case "g":
        t3.play();
        break;

      case "h":
        t4.play();
        break;

        default:
          break;
    }
  };

  function animation (key){
    const activekey=document.querySelector(`.${key}`);
    activekey.classList.add("pressed");


    setTimeout(()=>{
      activekey.classList.remove("pressed");
    },150)
  }

  function clickHandler(e){

    switch(e.target.id){
      case "crash":
        cr.play();
        break;
      case "kick":
        k.play();
        break;
      case "snare":
        s.play();
        break;
      case "tom1":
        t1.play();
        break;
      case "tom2":
        t2.play();
        break;
      case "tom3":
        t3.play();
        break;
      case "tom4":
        t4.play();
        break;
      default:
        break;

    }

  }

  
  return (
    <BodyStyled >
      <h1>Drum Kit App 🥁</h1>
      <div onClick={clickHandler}   className="body-container">
        <div id="crash"  className="crash box w">
         <h3 id="crash">W</h3>
         
        </div>
        <div id="kick" className="kick box a">
        <h3 id="kick">A</h3>

         
        
        </div>
        <div id="snare" className="snare box s">
        <h3 id="snare">S</h3>
         
        </div>
        <div id="tom1" className="tom1 box d">
        <h3 id="tom1">D</h3>

          
        </div>
        <div id="tom2" className="tom2 box f">
        <h3 id="tom2">F</h3>

         
        </div>
        <div id="tom3" className="tom3 box g">
        <h3 id="tom3">G</h3>

         
        </div>
        <div id="tom4" className="tom4 box h">
        <h3 id="tom4">H</h3>

         
        </div>
      </div>

      <Footer />

    </BodyStyled>
  );
};

const BodyStyled = styled.div`
  height: auto;
  background-color: #293241;
  text-align: center;

  h1{
    padding: 3rem;
    color: white;
  }

  .body-container {
    margin-top: 7rem;
    display: grid;
    /* grid-template-columns: repeat(); */
    grid-template-columns: repeat(auto-fill, minmax(400px, 4fr));
    justify-items: center;
    align-items: center;
    grid-row-gap: 1rem;

    height: 50%;
  }

  .box {
    width: 200px;
    height: 200px;

    
  }

  .pressed{
    border: 2px solid white;
    box-shadow: 4px 4px 4px 4px white;
  }

  @media screen and (max-width:1200px) {
    .body-container {
    
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
   
  }
  }


  @media screen and (max-width:768px) {

    
.box {
    width: 150px;
    height: 150px;

    
  }
    .body-container {
    
    grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
   
  }

    
  }

  @media screen and (max-width:420px) {

.body-container {
  margin-top: 2rem;

grid-template-columns: repeat(auto-fill, minmax(150px, 4fr));

}

.box {
    width: 100px;
    height: 100px;

    
  }


}
`;

export default Body;
