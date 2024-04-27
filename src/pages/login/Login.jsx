
import React, {useState} from 'react'
import './Login.css'
import Melon from '../../assets/melon.svg'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'
import {toast} from 'react-toastify'

const Login = () => {

  const [username, setUsername] = useState("yraigatt3")
  const [password, setPassword] = useState("sRQxjPfdS")
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    setLoading(true)
    let user = {
      username,
      password
    }

    axios
        .post("/auth/login", user)
        .then(res => { 
          console.log( "res", res.data.token)
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch(err => {
        console.log("err>>>" , err)
        toast.error("username or password is incorrect")
      })
      .finally(()=> setLoading(false))
  }

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
              <form onSubmit={handleLogin} action="">
                <img src={Melon} alt="" />
                <div className="info_input">
                  <p>Email Adress*</p>
                  <input value={username} onChange={e => setUsername(e.target.value)}  type="text" placeholder='Enter Your Email' />
                </div>
                <div className="info_input">
                  <p>Password*</p>
                  <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder='Enter Your Password' />
                </div>
                <div className="info_radio">
                 <span> <input  type="radio"  /> Remember Me </span>
                 <p>Forgot Password?</p>
                </div>
                <div className="info_button">
                <button disabled={loading} type='submit'>{loading ? "Loading..." : "Log in"}</button>
                  {/* <button>Login</button> */}
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
