import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import './Signin.css'

const Signin = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginClick = async(e) => {
        /* alert('Login Successfully') */
        e.preventDefault()
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data = res.json()
        if(res.status===400 || !res){
            console.log('failed')
            window.alert("Invalid Credential")
        }else {
            window.alert("Login Successful")
            navigate('/')
        }
    }
  return (
    <div>
        <section className='signin'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signin-form'>
                            <h2 className='signin-title'>Sign In</h2>
                            <form method='POST' className='register-form' id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type='email' name='email' id='email' autoComplete='off'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Your Email'></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type='password' name='password' id='password' autoComplete='off'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Your Password'></input>
                                </div>
                                <div className='form-group form-button'>
                                    <button type='button' className='btn btn-success' id='form-submit' onClick={loginClick}>Login</button>
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