import './App.css'
// import { useState } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import {Link, Route, Routes} from 'react-router-dom'
import Menu from './assets/menu.svg'
import Call from './assets/call.svg'
import Melon from './assets/melon.svg'
import SearchHeader from './assets/search-header.png'
import { MdOutlinePerson2 } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import AnimatedCursor from "react-animated-cursor"
import Image1 from './assets/EXAM (Copy) (1)/Group - 6/18 → Link → 1.jpg.png'
import Image2 from './assets/EXAM (Copy) (1)/Group - 7/18 → Link → 2.jpg.png'
import Image3 from './assets/EXAM (Copy) (1)/Group - 8/18 → Link → 3.jpg.png'
import Image4 from './assets/EXAM (Copy) (1)/Group - 9/18 → Link → 4.jpg.png'
import Image5 from './assets/EXAM (Copy) (1)/Group - 10/18 → Link → 5.jpg.png'




function App() {


  return (
    <>



    <section className="header_top">
      <div className="container">
        <div className="header_top_box">
          <img src={Menu} alt="" />
          <div className="header_top_links">
              <select name="" id="">
                <option value="Home">Home</option>
                <option value="Home">Home</option>
                <option value="Home">Home</option>
              </select>
              <select name="" id="">
                <option value="category">Category</option>
                <option value="category">Category</option>
                <option value="category">Category</option>
              </select>
              <select name="" id="">
                <option value="Products">Products</option>
                <option value="Products">Products</option>
                <option value="Products">Products</option>
              </select>
              
              <select name="" id="">
                <option value="pages">Pages</option>
                <option value="pages">Pages</option>
                <option value="pages">Pages</option>
              </select>
              <select name="" id="">
                <option value="blog">Blog</option>
                <option value="blog">Blog</option>
                <option value="blog">Blog</option>
              </select>
              <select name="" id="">
                <option value="elements">Elements</option>
                <option value="elements">Elements</option>
                <option value="elements">Elements</option>
              </select>
          </div>

          <span className='header_top_box-span '><img src={Call} alt="" /><p> +123 ( 456 )( 7890 )</p></span>
        </div>
      </div>
    </section>
    
<AnimatedCursor innerStyle={{display: "none", color: "12, 66, 150"}}/>

    

    <div className="first_row"></div>

    <section className="navbar">
      <div className="container">
        <div className="navbar_box">
        <img src={Melon} alt="" />
        <div className="navbar_input">
          <input  type="text" placeholder='Search For items' />
          <select name="" id="">
            <option value="all categories">all categories</option>
            <option value="all categories">all categories</option>
          </select>
            <img src={SearchHeader} alt="" />
        </div>
          <div className="navbar_links">
            <Link className='person' to={'/'}> <FaHome className='images' /> Home</Link>
            <Link className='person' to={'/login'}> {<MdOutlinePerson2 className='images' />} Login</Link>
          </div>
        </div>
      </div>
    </section>

    <div className="navbar_routes">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>

    <section className='footer_section'>
    <div className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_text">
            <img src={Melon} alt="" />
            <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
            <span className='footer_span'> <IoLocationOutline /> <p>51 Green St.Huntington ohaio beach ontario, NY
                11746 KY 4783, USA.</p></span>
            <span className='footer_span'><MdOutlineMarkEmailRead /> <p>example@email.com</p></span>
            <span className='footer_span'><LuPhoneCall /> <p>+91 123 456 78 90</p></span>
          </div>

          <div className="footer_text">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>contact us</p>
            <p>Support Center</p>
          </div>

          <div className="footer_text">
            <h3>Category</h3>
            <p>Dairy & Bakery</p>
            <p>Fruits & Vegetable</p>
            <p>Snac Spice</p>
            <p>Juice & Drinks</p>
            <p>Chicken & Meat</p>
            <p>Fast Food</p>
          </div>

          <div className="footer_text">
            <h3>Subscribe Our Newsletter</h3>
            <div className="footer_text-input">
              <input type="text" placeholder='Search here' />
              <FaTelegramPlane />
            </div>
            <div className="footer_text-sites">
              <Link to={'/'}> { <FaFacebookF  className='footer_image_site'/> } </Link>
              <Link to={'/'}> { <FaXTwitter  className='footer_image_site'/> } </Link>
              <Link to={'/'}> { <IoGlobeOutline  className='footer_image_site'/> } </Link>
              <Link to={'/'}> { <FaInstagram  className='footer_image_site'/> } </Link>

            </div>

            <div className="footer_image_food">
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
              <img src={Image5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="last_row">
        
      </div>

      <div className="footer_bot">
        <span>c 2024<p className='footer_bot_par'>FoodTrove</p>, All rights reserved.</span>
      </div>
    </div>
    </section>

     
    </>
  )
}

export default App
