import './SignInForm.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { createUser, selectCurrentUser } from '../store/sessionReducer'
import Footer from './FooterEle'


const SignUpForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const currentUser = useSelector(selectCurrentUser)
 
    const routeChange = () => {
        if (createUser) {
            navigate('/')
        }
    }

    // const handleSubmit = (e) => {
    //     dispatch(createUser({ email, password }))
    // }
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(createUser({ email, password }))
        .then(() => {
            setEmail('');
            setPassword('')
            setErrors([])
            routeChange()
        })
        .catch(async res => {
            let data = await res.json();
            setErrors(data)
        })
    }


    return (
        <>
            <div className='form-container'>
                <h1 className='form-title'>Sign Up</h1>
                <form className='form-data' onSubmit={handleClick}>
                    <label className='form-label'>Email
                        <input id='email' type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className='form-label'>Password 
                        <input id='password' type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className='continue-button' type='submit' onClick={handleClick}>Sign Up</button>
                </form>
                    <span className='display-errors'>{errors.map((err, idx) => (<p key={idx}><li>{err}</li></p>))}</span>
                    <p className='form-description'>By creating an account, you agree to David's Conditions of Use and Privacy Notice</p>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUpForm