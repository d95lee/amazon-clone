import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layout/Layout"
import { useState } from "react"
import './CreateReview.css'
import { createReview } from "../../store/reviewReducer"
import { selectProduct } from "../../store/productReducer"
import { useNavigate, useParams } from "react-router-dom"
import { FaStar } from 'react-icons/fa6'
import { selectCurrentUser } from "../../store/sessionReducer"

const CreateReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formHeadline, setFormHeadline] = useState('')
    const [formBody, setFormBody] = useState('')
    const [rating, setRating] = useState(null)
    const [mouseHover, setMouseHover] = useState(null)
    const userId = useSelector(state => state.session.id)
    const userEmail = useSelector(state => state.session.email)
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    const currentUser = useSelector(selectCurrentUser)
    
    const handleOnSubmit = (e) => {
        e.preventDefault()

    }
    
    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(createReview({ 
            userId,
            title: formHeadline,
            body: formBody,
            productId: productId,
            rating: rating,
            username: userEmail,
            owner: userEmail
        }))
            setFormHeadline('')
            setFormBody('')
            navigate(`/products/${productId}`)
    }

    return (
        <Layout>
            <div className="review-container">
                <div className='review-title-container'>
                    <h1 className='review-title'>Create Review</h1>
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
                    <input type="text" 
                    className='custom-textbox'
                    placeholder="What's most important to know?"
                    value={formHeadline}
                    onChange={(e) => setFormHeadline(e.target.value)}
                    />
                </label>
            <br />
            <hr className='review-break'/>
                <label><span className='review-body-text'>Add a written review</span>
                <br />
                    <textarea type="text"
                    className='custom-textarea'
                    placeholder="What did you like or dislike? What did you use this product for?" 
                    value={formBody}
                    onChange={(e) => setFormBody(e.target.value)}                    
                    />
                </label>

                <hr />
                <button className='review-submit-button' onClick={handleOnClick}><span className='review-submit-text'>Submit</span></button>
            </form>
            </div>
        </Layout>
    )
}

export default CreateReview