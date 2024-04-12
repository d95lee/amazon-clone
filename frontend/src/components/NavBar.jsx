import './NavBar.css'
import { selectCurrentUser } from '../store/sessionReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/white-logo.png'
import flag from '../assets/icons/america-flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from './DropDownMenu'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../store/productReducer'


const NavBar = props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [cartCount, setCartCount] = useState(0)
    const currentUser = useSelector(selectCurrentUser)

    // const fetchData = (value) => {
    //     dispatch(fetchProducts()) 
    //     const results = json.filter()
    // }

    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)

    // useEffect(() => {
    //     if (currentUser) {
    //             const totalQuantity = cart_itemsArr?.reduce((total, cart_item) => total + cart_item?.quantity, 0)
    //             setCartCount(totalQuantity)
    //         } else {
    //             setCartCount(0)
    //         }
    // }, [currentUser])
    
    const quantity = () => {
        const totalQuantity = cart_itemsArr.reduce((total, cart_item) => total + cart_item.quantity, 0)
        return totalQuantity
    }

    

    // useEffect(() => {
    //     quantity
    // }, [quantity])
    
    const fetchData = (value) => {
        dispatch(fetchProducts())
            .then(() => {
                const products = useSelector((state) => state.product);
                const productsArr = Object.values(products);
                
                const filteredProducts = productsArr.filter(product => {
                    return product.name === value;
                });
            })
            // .catch(error => {
            //     console.error('Error fetching products:', error);
            // });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const cartClick = () => {
        navigate('/cart_items')
    }

    return (
    <>  
        <nav className='nav-bar'>
             <div className='navbar-logo-container'>
                <Link to={'/'}><img className='navbar-logo' src={logo} /></Link>
            </div>
       
        <div className='nav-location-container'>
            <div className='nav-location'>
                <p id='text-city'>Delivering to San Jose 95002</p>
                <p id='nav-location-icon'></p>
                <p id='text-location'>Update Location</p>
            </div>
        </div>
        
            <div className='nav-search-container'>
                <select className='nav-search-left'>
                    <option>All</option>
                </select>
                <input type="search" className='nav-search-middle'
                placeholder="Search here"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                />
    
                <div className='nav-search-right'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon'
                    onClick={(e)=>fetchData(input)}
                    />
                </div>
            </div>
        <div className='nav-right-container'>
            <div className='nav-language'>
                <a href=""><img id='nav-flag' src={flag}/></a>
                <p id='nav-english'>EN</p>
            </div>

            <DropDownMenu/> 

            <div className='nav-orders'>
                <p id='text-returns'>Returns</p>
                <p id='text-orders'>& Orders</p>
            </div>

            <div className='nav-cart' onClick={cartClick}>
                <p className='cart-quantity'>{quantity()}</p>
                <p className='cart-text'>Cart</p>
            </div>

            <div>

            </div>
        </div>
        </nav>
    </>  
    )
}

export default NavBar