import './NavBar.css'
import { selectCurrentUser } from '../store/sessionReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/white-logo.png'
import flag from '../assets/icons/america-flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from './DropDownMenu'


const NavBar = props => {
    

    return (
    <>  
        <nav className='nav-bar'>
             <div className='navbar-logo-container'>
                <a href='/home'><img className='navbar-logo' src={logo} /></a>
            </div>
       
        
            <div className='nav-location'>
                <p id='text-city'>Delivering to San Jose 95002</p>
                <p id='nav-location-icon'></p>
                <p id='text-location'>Update Location</p>
            </div>
       
        
            <div className='nav-search-container'>
                <select className='nav-search-left'>
                    <option>All</option>
                </select>
                <input type="search" className='nav-search-middle'
                placeholder="Search here"/>
    
                <div className='nav-search-right'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon'/>
                </div>
            </div>

            <div className='nav-language'>
                <a href=""><img id='nav-flag' src={flag}/></a>
                <p id='nav-english'>EN</p>
            </div>

            <DropDownMenu/> 

            <div className='nav-orders'>
                <p id='text-returns'>Returns</p>
                <p id='text-orders'>& Orders</p>
            </div>

            <div className='nav-cart'>
                <p className='nav-cart-logo'></p>
            </div>
        </nav>
    </>  
    )
}

export default NavBar