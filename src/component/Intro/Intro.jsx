import React from 'react'
import "./Intro.css"
 import Github from "../../img/github.png";
 import LinkedIn from "../../img/linkedin.png"
 import Instagram from "../../img/instagram.png"
 import Vector1 from "../../img/Vector1.png"
 import Vector2 from "../../img/Vector2.png"
 import boy from "../../img/boy.png"
 import thumbup from "../../img/thumbup.png"
 import Crown from  "../../img/crown.png"
 import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from "framer-motion"
const Intro = () => {

  const transition = {duration:2, type:"spring"}
  return (
    <div className="intro">
              <div className="i-left">
                <div className="i-name">
                        <span>Hy! Am </span>
                        <span>Ankit Joshi</span>
                        <span> Full Stack Developer, Open Source Enthusiast 🔥. Always learning.</span>
                </div>

                <button className='button i-button'>Hire me </button>
              <div className='i-icons'>
              <a href="https://github.com/Ankit222002" target="_blank"> 
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/ankit-joshi-813731207/' target="_blank">
                <img src={ LinkedIn} alt="" /> 
                </a>
                <a href='https://www.instagram.com/accounts/login/' target= "_blank">
                <img src={Instagram} alt="" />
                </a>
              </div>

              </div>
              <div className="i-right">

                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img
                initial={{left:"-36%"}}
                whileInView = {{left:"-24%"}}
                transition={transition}
                 src={glassesimoji} alt=""
                 />
                 
                <motion.div
                initial={{top: "-4%", left:"74%"}}
                whileInView = {{left:"68%"}}
                transition={transition}
                style={{top:"-4%", left :"68%"}}
                className="floating-div"
                >
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </motion.div>

                <motion.div
                initial={{left:"9em", top:"18rem"}}
                whileInView={{left:"0rem"}}
                transition={transition}
                style={{top:"18rem", left:"0rem"}}
                className="floating-div"
                >
                  <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>
                </motion.div>
                {/*  blur divs */}

                <div className='blur' style={{background:"rgba (238 210 255"}}></div>
                <div className='blur' 
                style={{
                            background:"#C1F5FF",
                           top:"17rem",
                           width:"21rem",
                           height:"11rem",
                          left:"-9rem"}}
                          ></div>
                 </div>
              </div>
  )
}

export default Intro
