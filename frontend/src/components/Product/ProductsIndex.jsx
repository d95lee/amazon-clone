import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'

const ProductsIndex = () => {
    // const dispatch = useDispatch()
    // const products = useSelector(selectProduct())
   
    // useEffect(() => {
    //     dispatch(fetchProducts(products))
    // }, [])

    
    // return (
    //     <>
    //         {products.map((product) => <p>{product}</p> )}
    //     </>
    // )
}

export default ProductsIndex
