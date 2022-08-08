import React from 'react'
import {Link} from "react-scroll"
import "./Navbar.css"
import { Toggle } from './Toggle/Toggle'

const Navbar = () => {
  return (
 <div className="n-wrapper">
            <div className="n-left"> 
                    <div className="n-name">Ankit Joshi</div>
                    <Toggle/>
                </div>
            <div className="n-right"> 
                        {/* <div className="n-list">    
                                <ul style={{listStyleType: "none"}}>
                                        <Link spy={true} to= "Navbar" smooth={true} activeClass="activeClass"> 
                                        <li>Home</li>
                                        </Link>
                                        <Link spy={true} to="Expirence" smooth={true}> 
                                        <li>Exprience</li>
                                        </Link>
                                        <Link spy={true} to="Portfolio" smooth={true}> 
                                        <li>Portfolio</li>
                                        </Link>
                                        <Link spy={true} to="Testimonials" smooth={true}> 
                                        <li>Testimonials</li>
                                        </Link>
                                </ul>
                         </div>
                         <button className='button n-button'>
                            Contact 
                         </button> */}
            </div>
 </div>
    )
}

export default Navbar