import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpeg'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="" alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" id='demo' aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" id='demo' to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" id='demo' to="/contact" >Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" id='demo' to="/signin" >Login</NavLink>
                            </li>
                            
                            <li class="nav-item">
                                <NavLink class="nav-link" id='demo' to="/signup" tabindex="-1" aria-disabled="true" >Registration</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <nav class="navbar navbar-dark bg-primary">

            </nav>

            <nav class="navbar navbar-light" style="background-color: #e3f2fd;">

            </nav> */}
        </>
    )
}

export default Navbar