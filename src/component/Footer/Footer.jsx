import React from 'react'
import "./Footer.css"
import Insta from  "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Wave from "../../img/wave.png"
export const Footer = () => {
  return (
    <div className="footer">
        <img className='foot' src={Wave} alt="" style={{width: "100"}}/>
        <div className="f-content">
            <span>aj9818013263@gmail.com</span>
              <span>💻👨‍🦱Design and Developed by Ankit joshi
            </span>
            <div className="f-icons">
                <Insta color="black" size="3rem"/>
                <Github color="black" size="3rem"/>
                <Facebook color="black" size="3rem"/>
            </div>
        </div>
    </div>
  )
}
