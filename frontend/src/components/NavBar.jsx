import './NavBar.css'
import { selectCurrentUser } from '../store/sessionReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useNavigate } from 'react-router-dom'

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
            <h1>Amazon Clone</h1>
            {sessionLinks()}
        </nav>
    )
}

export default NavBar