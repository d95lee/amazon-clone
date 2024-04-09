import { useParams } from 'react-router-dom'
import { selectReview } from '../../store/reviewReducer'
import './ReviewsIndex.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import profile from '../../assets/icons/profile.jpeg'

const ReviewsIndex = () => {
    const dispatch = useDispatch()
    
    const reviews = useSelector((state) => state.review)
    const reviewsArr = Object.values(reviews)

    const { productId } = useParams()


    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    // const handleDelete = (e) => {
    //     e.preventDefault()
    //     dispatch(clearReview(productId))
    // }
// if ownerId === review.ownerId then dispatch(clearReview(review.owner))
    return (
        <>
            <div className='product-reviews'>
                {reviewsArr.map((review, index) => (
                    <div key={index}>
                        
                        {<p id='review-owner-text'><img className='profile-pic' src={profile}/><span id='owner-text-positioning'>{review.owner}</span></p>}
                        <p className='verified-purchase-text'>Verified Purchase</p>
                        {<p id='review-rating-text'>{review.rating}</p>}
                        {<p id='review-body-text'>{review.body}</p>}
                        <button onClick={() => dispatch(clearReview(review.id))}>Delete Review</button>
                        {console.log(reviews.id)}
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReviewsIndex