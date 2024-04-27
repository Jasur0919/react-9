import React from 'react'
import './Admin.css'
// import Melon1 from '../../assets//melon.svg'
import Food from '../../assets/admin-hero-img.png'
import Inner1 from '../../assets/inner-1.png'
import Inner2 from '../../assets/inner-2.png'
import Inner3 from '../../assets/inner-3.png'
import Inner4 from '../../assets/inner-4.png'



const Admin = () => {
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


    <section className="hero">
      <div className="container">
        <div className="hero_box">
          <div className="hero_text">
            <h1>Admin panel</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione recusandae necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus neque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,       recusandae
              necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
              rerum quod. Tempora magni autem a voluptatibus neque.</p>

            <div className="hero_text_par">

              <div className="hero_text_child">
                <span><h1   className='hero_text-h1'>0.1</h1><h3 className='hero_text_h3'>k</h3></span>
                <p  >Vendors</p>
              </div>
              <div className="hero_text_child">
                <span><h1  className='hero_text-h1'>23</h1><h3 className='hero_text_h3'>k</h3></span>
                <p >Customers</p>
              </div>
              <div className="hero_text_child">
                <span><h1  className='hero_text-h1'>2</h1><h3 className='hero_text_h3'>k</h3></span>
                <p >Products</p>
              </div>
            </div>
            
          </div>
          
          <div className="hero_img">
             <img src={Food} alt="" />

          </div>

        </div>
      </div>
    </section>

    <section className='wrapper'>
      <div className="container">
        <div className="wrapper_box">
          <div className="wrapper_card">
            <img src={Inner1} alt="" />
            <h3>Product Packing</h3>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing.</p>
          </div>
          <div className="wrapper_card">
            <img src={Inner2} alt="" />
            <h3>Product Packing</h3>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing.</p>
          </div>
          <div className="wrapper_card">
            <img src={Inner3} alt="" />
            <h3>Product Packing</h3>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing.</p>
          </div>
          <div className="wrapper_card">
            <img src={Inner4} alt="" />
            <h3>Product Packing</h3>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </section>


    </>
  )
  }

export default Admin
