import { useDispatch, useSelector } from 'react-redux';
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectProduct } from '../../store/productReducer';


const ProductIndexItem = () => {
    const dispatch = useDispatch();
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [])

    return (
        <div>
            {/* <Link to={`/products/${productId}`}>Link to product</Link>  */}
            {/* {product && <p id='product-price'>{product.price}</p>}            */}
        </div>
    )
}

export default ProductIndexItem