import React from "react";
import './FooterEle.css'
import logo from '../assets/logo/white-logo.png'
import white_linkedin from '../assets/icons/white_linkedin.png'
import white_github from '../assets/icons/white_github.png'


const Footer = () => {
    
    const topScroll = () => {
        window.scrollTo(0, 0)
    }
    
    return (
        <footer className='footer'>  
            <div className='footer-space'></div>  
                <div>
                    <div onClick={topScroll} className='footer-scroll'>Back to top</div>
                </div>
            
                <div className="top-footer">
                    <p>Amazon Clone. Created by David Lee ©2024</p>
                    <div className='footer-socials-container'>
                    <a href="https://www.linkedin.com/in/david-lee-49959a20a/" target="_blank"><img src={white_linkedin} className='footer-linkedin'/></a>
                    <a href="https://github.com/d95lee/amazon-clone" target="_blank"><img src={white_github} className='footer-github' /></a>
                    </div>
                </div>
            
                <div className="footer-logo-container">
                    <img src={logo} className='footer-logo'/>
                </div>                                   
        </footer>
    )
}

export default Footer