export const postReview = (review) => (
    fetch(`/api/reviews`, { 
        method: 'post',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const editReview = (review) => (
    fetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const deleteReview = (reviewId) => (
    fetch(`/api/reviews/${reviewId}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)