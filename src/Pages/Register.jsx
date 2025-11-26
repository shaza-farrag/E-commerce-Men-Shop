import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <>
   <div className='container login-page d-flex align-items-center'>
    <div className='w-100'>
        <h1 className='login-header mb-4'>Register</h1>
        <div className='underline mb-5'></div>
            <form className='login-container px-5' action="/action_page.php">
                <div className="mb-4 mt-3">
                    <label htmlFor="email" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Your Name" name="text" required />
                </div>
                <div className="mb-4 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" required />
                </div>
                <div className='mb-4'>
                    <span>Already has an account ? </span> <NavLink to={"/login"}>Login</NavLink>
                </div>
                <button type="submit" className="btn btn-dark d-block mx-auto">Register</button>
            </form>
        </div>
    </div>

   </>
  )
}

export default Register