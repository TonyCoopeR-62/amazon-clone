import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import './loginStyles.css'

const Login = ({ onSignInClicked, userData, onRegisterClicked, isUserAuthError, errorMessage }) => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    return onSignInClicked()
    // firebase logic here
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res) {
          history.push('/')
          onSignInClicked(res)
        }
      })
    .catch(error => console.log(error.message))
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
        {isUserAuthError && <p>{errorMessage}</p>}
      </div>
    </div>
  )
}

export default Login
