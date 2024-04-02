import './NavBar.css'
import { selectCurrentUser } from '../store/sessionReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/white-logo.png'

const NavBar = props => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/signin')
    }

    const sessionLinks = () => {
        if (currentUser) {
            return (
                <>
                    <div className='nav-right'>
                        <span className='session-links'>
                            <p>Hello {currentUser.email} </p>
                            <button onClick={() => dispatch(logoutUser())}>Logout</button>
                        </span>
                    </div>
                </>
            )
        } else {
            return (
            <>
            
                {/* <div className='navbar-logo-container'>
                    <a href='/home'><img className='navbar-logo' src={logo} /></a>
                </div> */}
                 <div className='nav-right'>
                    <button onClick={() => dispatch(routeChange)}>Sign In</button>
                    <p className='new-signup'> New Customer?  
                        <a href="http://localhost:5173/signup"> Start Here.</a>
                    </p>
                </div>
            </>
            )
        }
    }

    return (
        <nav className='nav-bar'>
             <div className='navbar-logo-container'>
                <a href='/home'><img className='navbar-logo' src={logo} /></a>
            </div>

            <div className='nav-location'>
                <p>Update Location</p>
            </div>

            <div>
                <input type="search" id='nav-search'
                placeHolder="Search here"
                />

                <input type="submit" id='nav-search-icon'
                />
            </div>

            <div className='nav-language'>
                <p>Language</p>
            </div>

            {sessionLinks()}

            <div className='nav-orders'>
                <p>Cart Placeholder</p>
            </div>

            <div className='nav-cart'>
                <p>Cart Placeholder</p>
            </div>
        </nav>
    )
}

export default NavBar