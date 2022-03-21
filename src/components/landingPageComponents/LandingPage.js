import React, {useState, useEffect} from 'react';
import { auth } from './fire'
import LoginForm from './LoginForm';
import HomePage from '../homePageComponents/HomePage'
import FirstNavbar from '../homePageComponents/FirstNavbar';
import SecondNavbar from '../homePageComponents/SecondNavbar';

function LandingPage() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [hasAccount, setHasAccount] = useState(false)

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleLogin = () => {
        clearErrors()
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/invalid-password":
                case "auth/user-not-found":
                    setEmailError(err.message)
                    break
                case "auth/wrong-password":
                    setPasswordError(err.message)
                    break
            }
        })
    }

    const handleSignup = () => {
        clearErrors()
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message)
                    break
                case "auth/weak-password":
                    setPasswordError(err.message)
                    break
            }
        })
    }

    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                clearInputs()
                setUser(user)
            }else {
                setUser("")
            }
        })
    }

    useEffect(() => {
        authListener()
    }, [])

    return (
    
        <div>
            {
                user ? (
                    <>
                        <FirstNavbar />
                        <SecondNavbar />
                        <HomePage />
                    </>
                
                ) : (
                
            <LoginForm
            email = {email}
            setEmail = { setEmail }
            password = { password }
            setPassword = { setPassword }
            handleLogin = { handleLogin }
            handleSignup = { handleSignup }
            hasAccount = { hasAccount }
            setHasAccount = { setHasAccount }
            emailError = { emailError }
            passwordError = { passwordError }
            />  
            )}
        </div> 
      )
    }

export default LandingPage