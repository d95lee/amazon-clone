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
import { fetchCartItems } from '../store/cartItemReducer'
import SearchModal from './SearchModal/SearchModal'


const NavBar = props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [modal, setModal] = useState(false)
    const currentUser = useSelector(state => !!state.session)

    // const fetchData = (value) => {
    //     dispatch(fetchProducts()) 
    //     const results = json.filter()
    // }

    useEffect(() => {
        dispatch(fetchCartItems())
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

    const filteredProduct = (word) => {
        e.preventDefault()
        setFilteredInput(productsArr.filter(product => {
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        return product.name
        }))
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
                <select className='nav-search-left'>
                    <option>All</option>
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
                
                {/* <SearchModal modalState={modalState} setModalState={setModalState}/> */}
                {/* <ul>{filteredData.map(product => (
                    <li key={product.id}>
                        <p><Link to={`product/${product.id}`}>{product.name}</Link></p>
                    </li>
                ))}
                </ul> */}
        
                <div className='nav-search-right'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon'
                    onClick={handleSearch}
                    // onClick={(e)=>fetchData(input)}
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