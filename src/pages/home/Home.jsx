import React, {useState} from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Swiper1 from '../../assets/Swipper.jpg'
import Inter1 from '../../assets/inter-1.png'
import Inter2 from '../../assets/inter-2.png'
import Inter3 from '../../assets/inter-3.png'
import Inner1 from '../../assets/inner-1.png'


const data = [
  {
    id: 1,
    img: Inter1,
    title: "Everyday Fresh & Clean with Our Products",
    tog: "shop Now"
  },
  {
    id: 2,
    img: Inter2,
    title: "Make your Breakfast Healthy and Easy",
    tog: "shop Now"
  },
  {
    id: 3,
    img: Inter3,
    title: "The best Organic Products Online",
    tog: "shop Now"
  }
]

const Home = () => {

let cards = data?.map((el) => (
  <div key={el.id} className="inter_card">
              <img  src={el.img} alt="" />
              <div className="inter_card_text">
                <h3>{el.title}</h3>
                <button>Shop Now</button>
              </div>
        </div>
))

  return (
    <>

   

    
      <section className="logo">
        <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide className='logo_swiper'>
                <img src={Swiper1} alt="" />
                <div className="logo_text">
                  <div className="container">
                    <h3><span>100%</span> Organic Vegetables</h3>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Amet reiciendis beatae consequuntur.</p>

                  </div>
                </div>
                </SwiperSlide>
              <SwiperSlide className='logo_swiper'>
                <img src={Swiper1} alt="" />
                <div className="logo_text">
                  <div className="container">
                    <h3><span>100%</span> Organic Vegetables</h3>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Amet reiciendis beatae consequuntur.</p>

                  </div>
                </div>
                </SwiperSlide>
              <SwiperSlide className='logo_swiper'>
                <img src={Swiper1} alt="" />
                <div className="logo_text">
                  <div className="container">
                    <h3><span>100%</span> Organic Vegetables</h3>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Amet reiciendis beatae consequuntur.</p>

                  </div>
                </div>
                </SwiperSlide>
              {/* <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
  </section>

  <section className="inter">
    <div className="container">
      <div className="inter_box">
        {cards}
        {/* <div className="inter_card">
              <img  src={Inter1} alt="" />
              <div className="inter_card_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
        </div>
        <div className="inter_card">
              <img  src={Inter1} alt="" />
              <div className="inter_card_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
        </div>
        <div className="inter_card">
              <img  src={Inter1} alt="" />
              <div className="inter_card_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
        </div> */}
      </div>
    </div>
  </section>

  <section className="inner">
    <div className="container">
      <div className="inner_box">
        <div className="inner_card">
          <img src={Inner1} alt="" />
          <div className="inner_text">
            <h3>Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="inner_card">
          <img src={Inner1} alt="" />
          <div className="inner_text">
            <h3>Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="inner_card">
          <img src={Inner1} alt="" />
          <div className="inner_text">
            <h3>Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="inner_card">
          <img src={Inner1} alt="" />
          <div className="inner_text">
            <h3>Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="inner_card">
          <img src={Inner1} alt="" />
          <div className="inner_text">
            <h3>Best prices & offers</h3>
            <p>Orders $50 or more</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default Home
