import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png" 
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import {motion} from "framer-motion"
// import Resume from "./Resume.pdf"

export const Services = () => {
  const transition = {duartion:1, type:"spring"}
  return (
    <div className="services" id="Services">
      {/* left side      */}
      <div className="awesome">
        <span>My</span>
        <span>skills</span>
        <span className="heading">
        Coding, software development and technical writing are just a few of the hard skills  
          <br/>
          
        </span>
        {/* <a href={Resume} download> */}
        <button className="button s-button" >Download CV</button>
        {/* </a> */}
        <div className="blur s-blurl"  style={{backgrond:"#ABF1FF94"}}></div>
      </div>
      {/* rigtrh side */}
      <div className="cards">'
      
                  <motion.div
                    whileInView = {{left:"14rem"}}
                    initial={{left:"25%"}}
                    transition={transition}
                    style={{left:"20rerm"}}> 
                      <Card
                        emoji= {HeartEmoji}
                        heading={"Libaries and Framework"}
                        detail = {"Reactjs, Pandas, Numpy, Bootstrap, openCV"}
                        />
                  </motion.div>

                  {/* SECON D CARD */}
      <motion.div 
      whileInView = {{left:"1rem"}}
      initial={{left:"0%"}}
      transition={transition}
      style={{top:"24rem", left:"8rem"}}>
        <Card 
        emoji={Glasses}
        heading={"Programing Language"}
        detail = {"Python, Html, Css, Javscript, MySQL"}
        />
      </motion.div>

      {/* THIRD CARD */}
      <motion.div 
      whileInView={{left:"24rem"}}
      initial = {{left:"25%"}}
      transition={transition}
      style={{top:"30rem", left:"30rem"}}>
        <Card 
        emoji={Humble}
        heading={"Core Subject"}
        detail={"DBMS, OOPS, Operating System"}/>
      </motion.div>
      <div className="blur s-blur2" style={{background: "var(--purple)"}}>
      </div>
      </div>   
      </div>
  )
}

