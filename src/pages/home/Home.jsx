import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Swiper1 from '../../assets/Swipper.jpg'


const Home = () => {
  return (
    <>

    
      <section className="logo">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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

    </>
  )
}

export default Home
