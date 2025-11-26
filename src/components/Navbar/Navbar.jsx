import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket , faUserPlus , faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import {NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="container-fluid navbackground">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className=" container p-3">
                    <NavLink to={"/home"} className="navbar-brand fw-bold fs-3">E-commerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to={"/home"} className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/products" }className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/about"} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="registration d-flex justify-content-center align-items-center gap-3 p-2">
                        <NavLink className="btn btn-outline-dark" to={"/login"}>
                            <FontAwesomeIcon icon={faRightToBracket}  /> Login
                        </NavLink>
                        <NavLink className="btn btn-outline-dark" to={"/register"}>
                           <FontAwesomeIcon icon={faUserPlus}  /> Register
                        </NavLink>
                        <NavLink className="btn btn-outline-dark" to={"/cart"}>
                           <FontAwesomeIcon icon={faCartShopping}  /> Cart (0)
                        </NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar