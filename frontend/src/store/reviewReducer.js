

// //TYPES


// export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
// export const RECEIVE_REVIEW = 'review/RECEIVE_REVIEW'
// export const CREATE_REVIEW = 'review/CREATE_REVIEW'
// export const UPDATE_REVIEW = 'review/UPDATE_REVIEW'
// export const DESTROY_REVIEW = 'review/DESTROY_REVIEW'


// //ACTION CREATORS

// export const receiveReviews = reviews => ({
//     type: RECEIVE_REVIEWS,
//     reviews
// })

// export const receiveReview = review => ({
//     type: RECEIVE_REVIEW,
//     review
// })

// export const createReview = review => ({
//     type: CREATE_REVIEW,
//     review
// })

// export const updateReview = reviewId => ({
//     type: UPDATE_REVIEW,
//     reviewId
// })

// export const destroyReview = reviewId => ({
//     type: DESTROY_REVIEW,
//     reviewId
// })


// // THUNK ACTION CREATORS

// export const fetchReviews = () => (dispatch, getState) => {
//     fetch('api/reviews')
//     .then(res => {
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw res
//         }
//     })
//     .then(data => {
//         dispatch(receiveReviews(data))
//     })
//     .catch(error => {
//         console.log('Error fetching reviews:', error)
//     })
// }

// export const fetchReview = (review_id) => (dispatch, getState) => {
//     fetch('api/reviews/')
// }