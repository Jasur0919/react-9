
import React from 'react'
import './Login.css'
import Melon from '../../assets/melon.svg'

const Login = () => {
  return (

    <>
     <section className="red">
      <div className="container">
        <div className="red_box">
          <p>Login </p>
          <p>Home-Login</p>
        </div>
      </div>
    </section>
    <div>
        <section className="info">
          <div className="container">
            <div className="info_box">
              <form action="">
                <img src={Melon} alt="" />
                <div className="info_input">
                  <p>Email Adress*</p>
                  <input type="text" placeholder='Enter Your Email' />
                </div>
                <div className="info_input">
                  <p>Password*</p>
                  <input type="text" placeholder='Enter Your Password' />
                </div>
                <div className="info_radio">
                 <span> <input  type="radio"  /> Remember Me </span>
                 <p>Forgot Password?</p>
                </div>
                <div className="info_button">
                  <button>Login</button>
                  <p>Signup?</p>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}
import './Login.css'

export default Login
