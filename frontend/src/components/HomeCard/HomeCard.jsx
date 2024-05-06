import { useDispatch, useSelector } from 'react-redux'
import './HomeCard.css'

const HomeCard = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)

    const randomIndex1 = Math.floor(Math.random() * productsArr.length)

    const electronicsArray = []
    
    productsArr.map((product) => {
        if (product.category === 'Electronics') {
            electronicsArray.push(product)
        }
    })

    return (
        <>
            <div className='homecard-layout'>
                <p>Electronics</p>
                {electronicsArray.map((eProduct, idx) => (
                    <div className='homecard-content' key={idx}>
                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomeCard