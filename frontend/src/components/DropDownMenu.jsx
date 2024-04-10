import React, { useState } from 'react'
import './DropDownMenu.css'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/sessionReducer';


const DropDownMenu = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();
    
    
    const emailString = (email) => {
        if (currentUser) {
            const fullEmail = currentUser.email
            const emailIndex = fullEmail.indexOf('@')
           
            const name = fullEmail.slice(0, emailIndex)
            return name
        }
    }

    const routeChange = () => {
        navigate('/signin')
    }

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <>
                    <div className='nav-right'>
                        <span className='session-links'>
                            <button onClick={() => dispatch(logoutUser())}>Sign Out</button>
                        </span>
                    </div>
                </>
            )
        } else {
            return (
            <>
                 <div className='nav-right'>
                    <button onClick={() => dispatch(routeChange())}>Sign In</button>
                    <p className='new-signup'> New Customer?  
                        <a href="http://localhost:5173/signup" className='text-start-here'> Start Here.</a>
                    </p>
                </div>
            </>
            )
        }
    }

    const handleHover = () => {
        setIsDropDown(true)
    }

    const handleMouseOff = () => {
        setIsDropDown(false)
    }

    if (!currentUser) {
    return (
        <>
            <div className='nav-drop-text'>
                <span id='login-trigger'
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOff}>
                        <div className='nav-drop-text-container'>
                            <p id='text-signin'>Hello, sign in</p>
                            <p id='text-account'>Account & Lists</p>
                        </div>
                </span>

                {isDropDown && (
                <div className="nav-dropdown-content" onMouseEnter={handleHover}>
                {sessionLinks()}
                </div>
              )}
            </div>
        </>
    )
} else {
    return (
        <>
            <div className='nav-drop-text'>
                <span id='login-trigger'
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseOff}>
                        <div className='nav-drop-text-container'>
                            <p id='text-signin'>Hello, {emailString(currentUser.username)}</p>
                            <p id='text-account'>Account & Lists</p>
                        </div>
                </span>

                {isDropDown && (
                <div className="nav-dropdown-content" onMouseEnter={handleHover}>
                {sessionLinks()}
                </div>
              )}
            </div>
        </>
    )
}
}

export default DropDownMenu