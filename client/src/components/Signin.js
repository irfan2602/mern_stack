import React from 'react'
import { NavLink } from 'react-router-dom'
import './Signin.css'

const Signin = () => {
  return (
    <div>
        <section className='signin'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signin-form'>
                            <h2 className='signin-title'>Sign In</h2>
                            <form className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type='email' name='email' id='email' autoComplete='off'
                                        placeholder='Your Email'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type='password' name='password' id='password' autoComplete='off'
                                        placeholder='Your Password'></input>
                                </div>
                                <div className='form-group form-button'>
                                    <button type='button' className='btn btn-success' id='form-submit'>Login</button>
                                </div>
                                <div>
                                    <NavLink to='/signup' className='signin-link' id='signin-link'>New User, Please Register</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Signin