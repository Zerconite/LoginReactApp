import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import search from './search.png';




function App() {
  const [page, setPage] = useState([{
    login: true,
    signUp: false
  }])
  const [heading, setHeading] = useState('Welcome Back');

  const setLogin = () => {
    setPage({ login: true, signUp: false });
    setHeading('Welcome Back');
    document.body.classList.add('leftSide');
    document.body.classList.remove('rightSide');
  }

  const setSignUp = () => {
    setPage({ login: false, signUp: true });
    setHeading('Become A Member');
    document.body.classList.add('rightSide');
    document.body.classList.remove('leftSide');
  }

  useEffect(() => {
    setPage({ login: true, signUp: false })
  }, [])

  const Login = (setSignUp) => {

    return (
      <form action="#" className="login">
        <div className="field">
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required minLength="5" maxLength="12" />
        </div>
        <div className="forgot"><a href="#">Forgot Your Password?</a></div>
        <div className="field">
          <input type="submit" placeholder="Login" />
        </div>
        <div className="google" id="gle">
          <img src={search} alt="icon" />
          <p>Login With Google</p>
        </div>
        <div className="secondSwitch">
          <p>Don't have an account? <a href="#" id="secSwitch">Sign Up</a></p>
        </div>
      </form>
    );
  }

  const SignUp = () => {

    function verifyPass() {
      var password = document.getElementById('pass');
      var conpassword = document.getElementById('conpass');
      if (password != conpassword) {
        alert('Passwords do not match');
        return false;
      }
      return true;
    }

    return (
      <form action="#" className="signUp">
        <div className="field">
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required minLength="5" maxLength="12" id="pass" />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm Password" required minLength="5" maxLength="12"
            id="conpass" />
        </div>
        <div className="field">
          <input type="submit" placeholder="Sign Up" onClick={verifyPass} />
        </div>
        <div className="wordWithLine">
          <span className="text">or</span>
        </div>
        <div className="google" id="gle">
          <img src={search} alt="icon" />
          <p>Sign Up With Google</p>
        </div>
        <div className="declare">
          <h6>By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and
            <a href="#">Cookie Policy</a>.
          </h6>
        </div>
      </form>
    );
  }

  return (
    <div className={'bod ' + (page.login ? 'leftSide' : 'rightSide')}>
      <div className="container">
        <div className="heading">
          <div className="title">{heading}</div>
        </div>
        <div className="formBox">
          <div className="changeForm">
            <div className={'change login ' + (page.login ? 'leftSide' : 'rightSide')} onClick={setLogin}>Login</div>
            <div className={'change signUp ' + (page.login ? 'leftSide' : 'rightSide')} onClick={setSignUp}>SignUp</div>
            <div className={'changeTab ' + (page.login ? 'leftSide' : 'rightSide')} id="tab" ></div>
          </div>
          <div className="inner">
            {page.login ? Login() : SignUp()}

          </div>
        </div>
      </div>

    </div >
  )
}

export default App;
