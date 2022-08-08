import React from 'react'

import "./Work.css"
import js from "../../img/js.png";
import my from "../../img/my.png"
import reac from "../../img/reac.png";
import vs from "../../img/vs.png";
import pyt from "../../img/pyt.png";
import {motion} from "framer-motion"
 
export const Work = () => {
  return (
    <div className='works'>
            <div className="awesome">
        <span>Programing Languages</span>
        <span>Framework and tool</span>
        <span>
             
          <br/>
           Python, Javascript     
          <br/>
          Pandas, Reactjs, Numpy
          <br/>
 Operating system, DBMS, OOPS
        </span>
        {/* <a href={Resume} download> */}
        <button className="button s-button" >Hire Me</button>
        {/* </a> */}
        <div className="blur s-blurl"  style={{backgrond:"#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      
      <div className='w-right'>
  
        <motion.div
        whileInView = {{rotate: 0}}
        initial={{rotate:180}}
        viewport={{margin:"-40px"}}
        transition={{duration:3.5, type:"spring"}}
        className="w-mainCircle">

          <div className="w-secCicle">
            <img src={my} alt=""/>    
          </div>
          <div className="w-secCicle">
            <img src={js} alt=""/>    
          </div>
          <div className="w-secCicle">
            <img src={reac} alt=""/>    
          </div>
          <div className="w-secCicle">
            <img src={vs} alt=""/>    
          </div>
          <div className="w-secCicle">
            <img src={pyt} alt=""/>    
          </div>
        </motion.div>
        <div className='w-backCircle  blueCircle'></div>
        <div className='w-backCircle  yellowCircle'></div>
      </div>
    </div>
  );
};
