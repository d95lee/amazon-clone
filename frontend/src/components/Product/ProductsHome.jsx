import './ProductsHome.css'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts } from '../../store/productReducer'
import { useEffect } from 'react'
import ProductIndexItem from './ProductIndexItem'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import CarouselEle from '../Carousel/CarouselEle'

const ProductsHome = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)
       
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>   
            <div className='home-product-container'>
                <div className='home-product-box0'>
            </div>
                <CarouselEle/> 
            </div>
        </>     
    )
}

export default ProductsHome
