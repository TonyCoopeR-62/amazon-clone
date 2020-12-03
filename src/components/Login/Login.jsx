import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './loginStyles.css'

const Login = ({ onSignInClicked, onRegisterClicked }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const signIn = (e) => {
    e.preventDefault()
    return onSignInClicked(credentials)
    // firebase logic here
  }

  const register = (e) => {
    e.preventDefault()
    // register logic
  }

  const handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    setCredentials({
      ...credentials,
      [name]: [value]
    })
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input 
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button
            onClick={signIn}
            className="login__signInButton btn-primary"
          >
            Sign In
          </button>
        </form>
        <p>By signing-in you agree to Amazon-clone Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>

        <button 
          className="login__registerButton"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
