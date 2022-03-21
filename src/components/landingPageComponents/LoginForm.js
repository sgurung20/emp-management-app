import logo from './logo.svg';
import React, { useRef } from 'react'

function LoginForm(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props

  return (
     <div className='rowLogin'>
        
        <div className='column1'>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            <h1>Employee Management System</h1> 
            <h2>An <i>efficent</i> tool to organize employee data</h2>
            </div>
        </div>

        <div className='column2'>
        <section className='login'>
            <div className='loginContainer'>
            <label>Username</label>
            <input
                type='text'
                autoFocus
                required
                value={email}
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                className='field'
            />
            <p className='errorMsg'>{emailError}</p>

            <label>Password</label>
            <input
                type='password'
                required
                value={password}
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                className='field'
            />
            <p className='errorMsg'>{passwordError}</p> 
         
            <div className='btnContainer'>
                {
                    hasAccount ? (
                        <>
                            <button onClick={handleLogin} className='button1'>Sign in</button>
                            <p>Don't have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
            
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup} className='button1'>Sign up</button>
                            <p>Have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    )
                }
            </div>
            </div>
        </section>
    </div>
      
    </div>
  )
}

export default LoginForm
