import React from "react";
import './FooterSign.css'
import logo from '../assets/logo/white-logo.png'
import white_linkedin from '../assets/icons/white_linkedin.png'
import white_github from '../assets/icons/white_github.png'

const FooterSign = () => {
    
    const topScroll = () => {
        window.scrollTo(0, 0)
    }
    
    return (
        <footer className='footer-sign'>  
            <div className='footer-sign-wrapper'>
                <div className='footer-sign-space'></div>  
                
                        <div onClick={topScroll} className='footer-sign-scroll'>Back to top</div>
                
                
                    <div className="top-footer-sign">
                        <p>Amazon Clone. Created by David Lee ©2024</p>
                        <div className='footer-sign-socials-container'>
                        <a href="https://www.linkedin.com/in/david-lee-49959a20a/" target="_blank"><img src={white_linkedin} className='footer-sign-linkedin'/></a>
                        <a href="https://www.linkedin.com/in/david-lee-49959a20a/" target="_blank"><img src={white_github} className='footer-sign-github' /></a>
                        </div>
                    </div>
                
                    <div className="footer-sign-logo-container">
                        <img src={logo} className='footer-sign-logo'/>
                    </div>       
                </div>     
        </footer>
    )
}

export default FooterSign