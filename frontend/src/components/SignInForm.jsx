import './SignInForm.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { loginUser, selectCurrentUser } from '../store/sessionReducer'
import Footer from './FooterEle'


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

    const routeSignup = () => {
        navigate('/signup')
    }

    // const handleSubmit = (e) => {
    //     dispatch(loginUser({ email, password }))
    // }
    

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
        .then(() => {
            setEmail('');
            setPassword('')
            setErrors([])
            routeChange()
        })
        .catch(async res => {
            let data = await res.json();
            setErrors(data.errors)
        })
    }

    const demoUser = (e) => {
        e.preventDefault()
        const demoEmail = 'demo@user.io'
        const demoPassword = 'password'
        setEmail(demoEmail)
        setPassword(demoPassword)
        dispatch(loginUser({ email: demoEmail, password: demoPassword }))
        routeChange()
    }


    return (
        <>
            <div className='form-container'>
            <h1 className='form-title'>Sign In</h1>
                <form className='form-data' onSubmit={currentUser ? demoUser : handleClick}>
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
                    <button className='continue-button' type='submit' onClick={handleClick}>Sign In</button>
                    <button className='demo' type='submit' onClick={demoUser}>Demo User</button>
                </form>
                <span className='display-errors'>{errors.map((err, idx) => (<p key={idx}><li>{err}</li></p>))}</span>
                <p className='form-description'>By continuing, you agree to David's Conditions of Use and Privacy Notice.</p>
            </div>
            <p id='create-account-text'>New to Amazon?</p>
            <button className='create-account-button' type='submit' onClick={routeSignup}>Create your Amazon Account</button>
            <Footer></Footer>
        </>
    )
}

export default SignInForm