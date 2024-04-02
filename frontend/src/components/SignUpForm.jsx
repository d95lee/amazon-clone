import './SignInForm.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { createUser, selectCurrentUser } from '../store/sessionReducer'
import Footer from './FooterEle'
import logo from '../assets/logo/Amazon-Logo-PNG.png'


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
    
    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser]) 


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
            <div className='logo-container'>
                <a href='/home'><img className='logo' src={logo} alt='a-logo'/></a>
            </div>
            <div className='form-container'>
                <h1 className='form-title'>Create Account</h1>
                <form className='form-data' onSubmit={handleClick}>
                    <label className='form-label'><span className='form-text'>Email</span>
                        <input id='email' type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <span className='display-email-errors'>{errors.map((err, idx) => {
                        if (err.includes('Email')) {
                            return (
                                <p key={idx}><li>{err}</li></p>
                            )
                        }
                        return null
                    })}</span>
                    

                    <label className='form-label'><span className='form-text'>Password</span> 
                        <input id='password' type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <span className='display-password-errors'>{errors.map((err, idx) => {
                        if (err.includes('Password')) {
                            return (
                                <p key={idx}><li>{err}</li></p>
                            )
                        }
                        return null
                    })}</span>

                    <button className='continue-button' type='submit' onClick={handleClick}>Sign Up</button>
                </form>
                    <p className='form-description'>By creating an account, you agree to David's Conditions of Use and Privacy Notice</p>
                    {/* <span className='display-errors'>{errors.map((err, idx) => (<p key={idx}><li>{err}</li></p>))}</span> */}
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUpForm