import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react"
import { changeReview, createReview } from "../../store/reviewReducer"
import { selectProduct } from "../../store/productReducer"
import { useNavigate, useParams } from "react-router-dom"
import { FaStar } from 'react-icons/fa6'
import './CreateReview.css'
import './EditReview.css'


const EditReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formHeadline, setFormHeadline] = useState('')
    const [formBody, setFormBody] = useState('')
    const [rating, setRating] = useState(null)
    const [mouseHover, setMouseHover] = useState(null)
    const userId = useSelector(state => state.session.id)
    const userEmail = useSelector(state => state.session.email)
    const { productId } = useParams()
    const { reviewId } = useParams()
    const product = useSelector(selectProduct(productId))
    
    const reviews = useSelector((state) => state.review)
    const reviewsArr = Object.values(reviews)

    useEffect(() => {
        reviewsArr.map((review) => {
            if (setFormBody(review.body) === review.body) {
                return setFormBody(review.body)
            }
        })
    }, [])

    // useEffect(() => {
    //     const review = reviewsArr.find((review) => review.id === reviewsArr.id)
    //     console.log(review)
    //     if (review) {
    //         setFormBody(review.body)
    //     }
    // }, [productId])

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleOnEditClick = (e) => {
        e.preventDefault()
        const review = reviewsArr.find(review => review.id === reviewId);
        dispatch(changeReview({
            id: reviewId,
            userId,
            title: formHeadline,
            body: formBody,
            productId: productId,
            rating: rating,
            username: userEmail,
            owner: userEmail
        
        }))
            navigate(`/products/${productId}`)
    }
    

    return (
        <Layout>
            <div className="review-container">
                <div className='review-title-container'>
                    <h1 className='review-edit-title'>Edit Review</h1>
                    <hr className='review-break'/>
                </div>
            <hr className='review-break-top'/>
            
            <form onSubmit={handleOnSubmit} className='review-form-main-container'>
                
                    {[...Array(5)].map((star, index) => {     
                        const currentStars = index + 1
                        return (
                    <label key={index}>
                        <input type="radio"
                            name='rating'
                            value={currentStars}
                            onClick={() => setRating(currentStars)}
                            />
                         <FaStar className='review-stars' size={50}
                                color={currentStars <= (mouseHover || rating) ? "#ffc107" : "e4e5e9"}
                                onMouseEnter={() => setMouseHover}
                                onMouseLeave={() => setMouseHover(null)}
                                />
                    </label>
                        )
                       
                    })}
                
            <br />
            <hr className='review-break'/>
                <label><span className='review-headline-text'>Add a headline</span>
                <br />
                    <input type="text" className='custom-textbox'
                    value={formHeadline}
                    onChange={(e) => setFormHeadline(e.target.value)}
                    />
                </label>
            <br />
            <hr className='review-break'/>
                <label><span className='review-body-text'>Add a written review</span>
                <br />
                    <textarea className='custom-textarea' type="text"
                    value={formBody}
                    onChange={(e) => setFormBody(e.target.value)}                    
                    />
                </label>

                <hr />
                <button className='review-submit-button' onClick={handleOnEditClick}><span className='review-edit-text'>Edit</span></button>
                </form>
            </div>
        </Layout>
    )
}

export default EditReview