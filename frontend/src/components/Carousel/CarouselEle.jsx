import './CarouselEle.css'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeCard from '../HomeCard/HomeCard'


const slidePoints = [
    { width: 800, itemsToShow: 8 },
    // { width: 550, itemsToShow: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4}
]


const CarouselEle = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)
    
    const randomIndex1 = Math.floor(Math.random() * productsArr.length)
    const randomIndex2 = Math.floor(Math.random() * productsArr.length)
    const randomIndex3 = Math.floor(Math.random() * productsArr.length)
    const randomIndex4 = Math.floor(Math.random() * productsArr.length)
    const randomIndex5 = Math.floor(Math.random() * productsArr.length)
    const randomIndex6 = Math.floor(Math.random() * productsArr.length)
    const randomIndex7 = Math.floor(Math.random() * productsArr.length)
    const randomIndex8 = Math.floor(Math.random() * productsArr.length)
    const randomIndex9 = Math.floor(Math.random() * productsArr.length)
    const randomIndex10 = Math.floor(Math.random() * productsArr.length)
    const randomIndex11 = Math.floor(Math.random() * productsArr.length)
    const randomIndex12 = Math.floor(Math.random() * productsArr.length)
    
    // const zeroCase1 = (randomIndex1 === 0 || randomIndex1 === 19) ? 2 : randomIndex1 
    // const zeroCase2 = (randomIndex2 === (19)) ? 2 : randomIndex1
    // const zeroCase3 = (randomIndex3 === (19)) ? 2 : randomIndex1
    // const zeroCase4 = (randomIndex4 === (4 || 19)) ? 2 : randomIndex1
    // const zeroCase5 = (randomIndex5 === (5 || 19)) ? 2 : randomIndex1
    // const zeroCase6 = (randomIndex6 === (6 || 19)) ? 2 : randomIndex1
    
    const electronicsArray = []
    const clothingArray = []
    const furnitureArray = []
    
    productsArr.map((product) => {
        if (product.category === 'Electronics') {
            electronicsArray.push(product)
        } else if ((product.category === 'Clothing')) {
            clothingArray.push(product)
        } else if ((product.category === 'Furniture')) { 
            furnitureArray.push(product)
        }
    })



    return (
        <>
            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                        <div className='carousel-text'>
                            <p id='home-product-clothing-text'>Best Sellers in Clothing, Shoes & Jewelry</p>
                        </div>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex1 + index) % productsArr.length}`}>{products[(randomIndex1 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex1 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex2 + index) % productsArr.length}`}>{products[(randomIndex2 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex2 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex3 + index) % productsArr.length}`}>{products[(randomIndex3 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex3 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex6 + index) % productsArr.length}`}>{products[(randomIndex6 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex6 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>
                </Carousel>
            </div>
        
                <div className='homecard-container'>
                    <div className='homecard-layout'>
                        <p className='homecard-text'>Deals in Electronics</p>
                            <div className='homecard-photo-columns'>
                                {electronicsArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className='homecard-layout'>
                        <p className='homecard-text'>Trendy Clothing</p>
                            <div className='homecard-photo-columns'>
                                {clothingArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className='homecard-layout'>
                        <p className='homecard-text'>Best Value Furniture</p>
                            <div className='homecard-photo-columns'>
                                {furnitureArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>

                    <div className='homecard-layout3'>
                        <p className='homecard-text'>Best Value Furniture</p>
                            <div className='homecard-photo-columns'>
                                {electronicsArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className='homecard-layout1'>
                        <p className='homecard-text'>Best Value Furniture</p>
                            <div className='homecard-photo-columns'>
                                {clothingArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className='homecard-layout2'>
                        <p className='homecard-text'>Best Value Furniture</p>
                            <div className='homecard-photo-columns'>
                                {furnitureArray.map((eProduct, idx) => (
                                    <div className='homecard-content' key={idx}>
                                        {eProduct?.photoUrl && <img className='homecard-photo' src={eProduct.photoUrl} /> }
                                    </div>
                                ))}
                            </div>
                    </div>
        

            {/* <div className='homecard-container-one'>
                <div className='homecard-one'><HomeCard/></div>
            </div>
                
                <div className='homecard-two'><HomeCard/></div>
                <div className='homecard-three'><HomeCard/></div> */}
            

            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                    <div className='carousel-text'>
                            <p id='home-product-electronics-text'>Best Sellers in Electronics</p>
                        </div>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex6 + index) % productsArr.length}`}>{products[(randomIndex6 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex6 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex5 + index) % productsArr.length}`}>{products[(randomIndex5 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex5 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex4 + index) % productsArr.length}`}>{products[(randomIndex4 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex4 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex3 + index) % productsArr.length}`}>{products[(randomIndex3 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex3 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>
                </Carousel>
            </div>








            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                    <div className='carousel-text'>
                            <p id='home-product-electronics-text'>Best Sellers in Toys & Games</p>
                        </div>
                        {Array.from({ length:6 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex12 + index) % productsArr.length}`}>{products[(randomIndex12 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex12 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:6 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex2 + index) % productsArr.length}`}>{products[(randomIndex2 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex2 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:6 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex10 + index) % productsArr.length}`}>{products[(randomIndex10 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex10 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:6 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex7 + index) % productsArr.length}`}>{products[(randomIndex7 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex7 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>
                </Carousel>
            </div>



            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                    <div className='carousel-text'>
                            <p id='home-product-electronics-text'>Best Sellers in Furniture</p>
                        </div>
                        {Array.from({ length:5 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex5 + index) % productsArr.length}`}>{products[(randomIndex5 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex5 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:5 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex1 + index) % productsArr.length}`}>{products[(randomIndex1 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex1 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:5 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex9 + index) % productsArr.length}`}>{products[(randomIndex9 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex9 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:5 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex2 + index) % productsArr.length}`}>{products[(randomIndex2 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex2 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>
                </Carousel>
            </div>



            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                    <div className='carousel-text'>
                            <p id='home-product-electronics-text'>Best Sellers in Amazon</p>
                        </div>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(index + 21)}`}>{products[(index + 21)]?.photoUrl && <img className='home-photo-single'src={products[(index + 21)].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(index + 21)}`}>{products[(index + 21)]?.photoUrl && <img className='home-photo-single'src={products[(index + 21)].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex4 + index) % productsArr.length}`}>{products[(randomIndex4 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex4 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:4 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex3 + index) % productsArr.length}`}>{products[(randomIndex3 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex3 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>
                </Carousel>
            </div>







                <div className='carousel-container-2'>
                    <Carousel itemsToShow={1}>
                        <div className='home-product-box1'>
                            {Array.from({ length:2 }).map((_, index) => (
                                <div className='box-content' key={index}>    
                                    <Link to={`products/${(randomIndex1 + index) % productsArr.length}`}>{products[(randomIndex1 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex1 + index) % productsArr.length].photoUrl} /> }</Link>
                                </div>
                                ))}
                        </div>

                        <div className='home-product-box1'>
                            {Array.from({ length:2 }).map((_, index) => (
                                <div className='box-content' key={index}>    
                                    <Link to={`products/${(randomIndex2 + index) % productsArr.length}`}>{products[(randomIndex2 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex2 + index) % productsArr.length].photoUrl} /> }</Link>
                                </div>
                                ))}
                        </div>


                        <div className='home-product-box1'>
                            {Array.from({ length:2 }).map((_, index) => (
                                <div className='box-content' key={index}>    
                                    <Link to={`products/${(randomIndex3 + index) % productsArr.length}`}>{products[(randomIndex3 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex3 + index) % productsArr.length].photoUrl} /> }</Link>
                                </div>
                                ))}
                        </div>

                        <div className='home-product-box1'>
                            {Array.from({ length:2 }).map((_, index) => (
                                <div className='box-content' key={index}>    
                                    <Link to={`products/${(randomIndex4 + index) % productsArr.length}`}>{products[(randomIndex4 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex4 + index) % productsArr.length].photoUrl} /> }</Link>
                                </div>
                                ))}
                        </div>

                        <div className='home-product-box1'>
                            {Array.from({ length:2 }).map((_, index) => (
                                <div className='box-content' key={index}>    
                                    <Link to={`products/${(randomIndex5 + index) % productsArr.length}`}>{products[(randomIndex5 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex5 + index) % productsArr.length].photoUrl} /> }</Link>
                                </div>
                                ))}
                        </div>
                    </Carousel>
                </div>

            
        </>
    )
}

export default CarouselEle