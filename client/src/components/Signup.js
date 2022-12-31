import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const [user,setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
    
    let name,value
    const handleChange =  (e) =>{
        //console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
        console.log(user)
    }
    const registerClick = async (e) =>{
        // alert('Register Successfully')
        e.preventDefault()
         const [name,email,phone,work,password,cpassword] = user
    }
    return (
        <div>
            <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='signup-title'>Sign Up</h2>
                            <form className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor='name'>
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type='text' name='name' id='name' autoComplete='off'
                                        value={user.name}
                                        onChange={handleChange}
                                        placeholder='Your Name'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type='email' name='email' id='email' autoComplete='off'
                                        value={user.email}
                                        onChange={handleChange}
                                        placeholder='Your Email'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'>
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type='number' name='phone' id='phone' autoComplete='off'
                                        value={user.phone}
                                        onChange={handleChange}
                                        placeholder='Your Number'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='work'>
                                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type='text' name='work' id='work' autoComplete='off'
                                        value={user.work}
                                        onChange={handleChange}
                                        placeholder='Your Profession'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type='password' name='password' id='password' autoComplete='off'
                                        value={user.password}
                                        onChange={handleChange}
                                        placeholder='Your Password'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='cpassword'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type='password' name='cpassword' id='cpassword' autoComplete='off'
                                        value={user.cpassword}
                                        onChange={handleChange}
                                        placeholder='Your Confirm Password'></input>
                                </div>
                                <div className='form-group form-button'>
                                    <button type='button' className='btn btn-primary' onClick={registerClick}>Register</button>
                                </div>
                                <div>
                                    <NavLink to='/signin' className='signin-link'>Already Register,Please Sign In</NavLink>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup