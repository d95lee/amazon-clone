import './SignInForm.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { loginUser, selectCurrentUser } from '../store/sessionReducer'
import Footer from './FooterEle'
import logo from '../assets/logo/Amazon-Logo-PNG.png'


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

    // useEffect(() => {
    //     let isAuth = localStorage.getItem('X-CSRF-Token')
    //     if (isAuth && isAuth !== 'undefined') {
    //         navigate('/')
    //     }
    // }, [navigate])

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser])

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
        // setEmail(demoEmail)
        // setPassword(demoPassword)
        dispatch(loginUser({ email: demoEmail, password: demoPassword }))
        // routeChange()
    }


    return (
        <>
                <div className='logo-container'>
                <a href='/home'><img className='logo' src={logo} /></a>
                </div>
            <div className='form-container'>
            <h1 className='form-title'>Sign In</h1>
                <form className='form-data' onSubmit={currentUser ? demoUser : handleClick}>
                    <label className='form-label'><span className='form-text'>Email</span>
                        <input id='email' type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                        <label className='form-label'><span className='form-text'>Password</span>
                        <input id='password' type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <span className='display-email-errors'>{errors.map((err, idx) => {
                        if (err.includes('credentials')) {
                            return (
                                <p key={idx}><li>{err}</li></p>
                            )
                        }
                        return null
                    })}</span>

                    <button className='continue-button' type='submit' onClick={handleClick}>Sign In</button>
                    <button className='demo' type='submit' onClick={demoUser}>Demo User</button>
                </form>
                <p className='form-description'>By continuing, you agree to David's Conditions of Use and Privacy Notice.</p>
            </div>
            <p id='create-account-text'>New to Amazon?</p>
            <button className='create-account-button' type='submit' onClick={routeSignup}>Create your Amazon Account</button>
            <Footer></Footer>
        </>
    )
}

export default SignInForm