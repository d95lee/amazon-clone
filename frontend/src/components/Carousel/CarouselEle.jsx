import './CarouselEle.css'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


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

            <div className='carousel-container'>
                <Carousel itemsToShow={1}>  
                    <div className='home-product-box1'>
                    <div className='carousel-text'>
                            <p id='home-product-electronics-text'>Best Sellers in Electronics</p>
                        </div>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex6 + index) % productsArr.length}`}>{products[(randomIndex6 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex6 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex5 + index) % productsArr.length}`}>{products[(randomIndex5 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex5 + index) % productsArr.length].photoUrl} /> }</Link>
                            </div>
                            ))}
                    </div>

                    <div className='home-product-box1'>
                        {Array.from({ length:8 }).map((_, index) => (
                            <div className='box-content' key={index}>    
                                <Link to={`products/${(randomIndex4 + index) % productsArr.length}`}>{products[(randomIndex4 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex4 + index) % productsArr.length].photoUrl} /> }</Link>
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

                        <div className='carousel-photo'>One</div>
                        <div className='carousel-photo'>Two</div>
                        <div className='carousel-photo'>Three</div>
                        <div className='carousel-photo'>Four</div>
                        <div className='carousel-photo'>Five</div>
                        <div className='carousel-photo'>Six</div>
                        <div className='carousel-photo'>Seven</div>
                        <div className='carousel-photo'>Eight</div>
                    </Carousel>
                </div>

            
        </>
    )
}

export default CarouselEle