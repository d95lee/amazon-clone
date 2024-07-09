import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/white-logo.png'
import flag from '../../assets/icons/america-flag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../../store/productReducer'
import { fetchCartItems } from '../../store/cartItemReducer'


const NavBar = props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [modal, setModal] = useState(false)
    const currentUser = useSelector(state => !!state.session)

    

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchCartItems())
        }
        dispatch(fetchProducts())
    }, [])
    
    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)

    const quantity = () => {
        const totalQuantity = cart_itemsArr.reduce((total, cart_item) => total + cart_item.quantity, 0)
        return totalQuantity
    }

    const filter = (e) => {
        e.preventDefault()
        setFilteredData(productsArr.filter(product => 
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))  
    }


    const handleSearch = (e) => {
        e.preventDefault()
        cart_itemsArr.map((cartItem, idx) => {
            if (cartItem.name === setInput()) {
                return cartItem.name
            }
        })
    }

    const cartClick = () => {
        navigate('/cart_items')
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
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
                <select className='nav-search-left'
                onClick={filter}
                >
                    <option>All</option>
                    <option value="Electronics">Electronic</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Toys & Games">Toys & Games</option>
                    <option value="Office Products">Office Products</option>
                    <option value="Baby">Baby</option>
                    <option value="Books">Books</option>
                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Instruments">Instruments</option>
                    <option value="Pet Supplies">Pet Supplies</option>
                    <option value="Food">Food</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Garden">Garden</option>
                    <option value="Kitchen Supplies">Kitchen Supplies</option>


                </select>
                <input type="search" 
                    className='nav-search-middle'
                    placeholder="Search here"
                    onClick={toggleModal}
                    onChange={filter}
                />
                {modal && (
                    <div className='modal' onClick={toggleModal}>
                        <div className='overlay' onClick={toggleModal}>
                            <div className='modal-content'>
                                <ul>{filteredData.map(product => (
                                        <li key={product.id}>
                                            <p><Link to={`products/${product.id}`}>{product.name}</Link></p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                
        
                <div className='nav-search-right'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon'
                    onClick={handleSearch}
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
                <p className='cart-quantity'>{ currentUser ? quantity() : 0}</p>
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