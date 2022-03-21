import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../landingPageComponents/fire'

function FirstNavbar() {

    const handleLogout = () => {
        auth.signOut();
    }

  return (
    <div>
        <section className='welcome'>
                <nav>
                    <Link to='/' style={{ textDecoration: 'none' }}><h3>EMS</h3></Link>
                    <p style={{marginRight:"10px"}} className="d-flex justify-content-end">{auth._delegate.currentUser.email}</p>
                    <button onClick={handleLogout} className='button1'>
                        Logout
                    </button>
                </nav>
            </section>
    </div>
  )
}

export default FirstNavbar