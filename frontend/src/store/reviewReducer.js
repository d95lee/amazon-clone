import { postReview, editReview, deleteReview } from "../utils/reviewApiUtils"

//TYPES


export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'review/RECEIVE_REVIEW'
export const CREATE_REVIEW = 'review/CREATE_REVIEW'
export const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
export const DESTROY_REVIEW = 'review/DESTROY_REVIEW'


//ACTION CREATORS

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const newReview = review => ({
    type: CREATE_REVIEW,
    review
})

export const updateReview = reviewId => ({
    type: UPDATE_REVIEW,
    reviewId
})

export const removeReview = reviewId => ({
    type: DESTROY_REVIEW,
    reviewId
})


// THUNK ACTION CREATORS
// I changed the route and added productId as an argument, not sure if right
export const fetchReviews = () => (dispatch, getState) => {
    fetch(`/api/reviews`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveReviews(data))
    })
    .catch(error => {
        console.log('Error fetching reviews:', error)
    })
}

export const fetchReview = (review_id) => (dispatch, getState) => {
    fetch(`/api/reviews/${review_id}`)
    // fetch(`api/products/${review_id}/reviews/${review_id}`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveReview(data))
    })
    .catch(error => {
        console.log('Failed to fetch review:', error)
    })
}

export const createReview = (review) => (dispatch, getState) => {
    postReview(review)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(newReview(data))
    })
    .catch(error => {
        console.log('Failed to create a review:', error)
    })
}

export const changeReview = (review) => (dispatch, getState) => {
    editReview(review)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(updateReview(data))
    })
    .catch(error => {
        console.log('Failed to update review:', error)
    })
}

export const clearReview = reviewId => (dispatch, getState) => {
    deleteReview(reviewId)
    .then(res => {
        if (!res.ok) {
            throw res
        }
        dispatch(removeReview(reviewId))
    })
    .catch(error => {
        console.log('Failed to delete review:', error)
    })
}

export const selectReview = (review_id) => state => state.review[review_id]



const reviewReducer = (state = {}, action) => {
    const nextState = { ...state }
        switch (action.type) {
            case RECEIVE_REVIEW:
                nextState[action.review.id] = action.review
                return nextState
            case RECEIVE_REVIEWS:
                return action.reviews
            case CREATE_REVIEW:
                nextState[action.review] = action.review
                return nextState
            case UPDATE_REVIEW:
                nextState[action.review.id] = action.review
                return nextState
            case DESTROY_REVIEW:
                delete nextState[action.reviewId]
                return nextState
            default:
                return state
        }
}

export default reviewReducer