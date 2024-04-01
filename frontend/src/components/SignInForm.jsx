import './SignInForm.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { createSession, loginUser, selectCurrentUser } from '../store/sessionReducer'


const SignInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const currentUser = useSelector(selectCurrentUser)
 
    const routeChange = () => {
        if (loginUser) {
            navigate('/')
        }
    }

    const handleSubmit = (e) => {
        dispatch(loginUser({ email, password }))
    }

    // const handleClick = (e) => {
    //    dispatch(loginUser({ email, password }));
        
    //         routeChange()
    //     }
    

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
        .then(() => {
            setEmail('');
            setPassword('')
            setErrors([])
            routeChange()
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                const { errors } = error.response.data
                setErrors(errors)
            } else {
                setErrors([error.message])
            }
        })
    }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     dispatch(loginUser({ email, password }))
    //     .then(() => {
    //         setEmail('');
    //         setPassword('')
    //         setErrors([])
    //         routeChange()
    //     })
    //     .catch(async res => {
    //         let data = await res.json()
    //         setErrors(data.errors)
    //     })
    // }


    return (
        <>
            <div className='form-container'>
                <form className='form-data' onSubmit={handleSubmit}>
                    <label>Email
                        <input id='email' type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>Password 
                        <input id='password' type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className='continue-button' type='submit' onClick={handleClick}>Sign In</button>
                </form>
                {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
            </div>
        </>
    )
}

export default SignInForm