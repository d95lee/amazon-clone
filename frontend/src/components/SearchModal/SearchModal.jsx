import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productReducer"

const SearchModal = ({ modalState, setModalState }) => {
    const dispatch = useDispatch()
    const [filteredData, setFilteredData] = useState([])
    
    useEffect(() => {
        dispatch(fetchProducts())
    })

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)
 
    const filter = (e) => {
        e.preventDefault()
        setFilteredData(productsArr.filter(product => 
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))  
    }

    if (modalState === 'search') {
        return (
            <>
                <div className="search-modal-background" onClick={() => setModalState(null)}>
                    <div className="search-modal-content" onClick={e => e.stopPropagation()}>
                        <input type="search" 
                            className='nav-search-middle'
                            placeholder="Search here"
                            onChange={filter}
                        />
                        <ul>{filteredData.map(product => (
                            <li key={product.id}>
                                <p><Link to={`product/${product.id}`}>{product.name}</Link></p>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default SearchModal