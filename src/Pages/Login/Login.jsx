import React from 'react'
import './Login.css'
import {NavLink } from 'react-router-dom';

function Login() {
  return (
   <>
   <div className='container login-page d-flex align-items-center'>
    <div className='w-100'>
        <h1 className='login-header mb-4'>Login</h1>
        <div className='underline mb-5'></div>
            <form className='login-container px-5' action="/action_page.php">
                <div className="mb-4 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" required />
                </div>
                <div className='mb-4'>
                    <span>New Here ? </span> <NavLink to={"/register"}>Register</NavLink>
                </div>
                <button type="submit" className="btn btn-dark d-block mx-auto">Login</button>
            </form>
        </div>
    </div>

   </>
  )
}

export default Login