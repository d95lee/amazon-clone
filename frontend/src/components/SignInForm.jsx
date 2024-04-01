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
                <form className='form-data' onSubmit={currentUser ? demoUser : handleClick}>
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
                    <button className='demo' type='submit' onClick={demoUser}>Demo User</button>
                </form>
                {errors.map((err, idx) => (<p key={idx}>{err}</p>))}
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignInForm