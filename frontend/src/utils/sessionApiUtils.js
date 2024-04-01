// import { csrfFetch } from "./csrfUtils"

export const postUser = userInfo => (
    fetch('api/users', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const postSession = sessionInfo => (
    fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(sessionInfo),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)

export const deleteSession = () => (
    fetch('/api/session', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
        }
    })
)