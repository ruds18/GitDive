import React from 'react';
import "../CSS/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/Group 3.png'

function Home() {
  return (
    <div className='home-container'>

      {/* Left Part */}
      <div className='left-container'>
        <h1 className='logo'>GetRepo</h1>
        <div className='left-container_contents'>
          <p>Ease your searching Journey with us.</p>
          <p>GetRepo helps you to find your github repository at just the tip of your finger with various search filters.</p>
        </div>
        <div className='left-container_testimonial-container'>
           <div className='left-container_testimonial'>
           
           </div>
           <div className='left-container_testimonial-btns'>
              <div className='left-container_testimonial-btn active'></div>
              <div className='left-container_testimonial-btn faded'></div>
              <div className='left-container_testimonial-btn faded'></div>
              <div className='left-container_testimonial-btn faded'></div>
              </div>
        </div>
      </div>

      {/* Right Part */}
      <div className='right-container'>
      <h1 className='right-container_heading'>Login</h1>
      <div className='right-container_contents'>
        <p className='right-container_info'>
        Login securely , with world’s most safest authentication
        </p>
        <div className='right-container_btn'>
          <img src={logo} alt="" />
          <p>Continue With Google </p>
        </div>
      </div>

      <div className='right-container_devlopers'>
        <div className='developers-heading'><p>Devloped by</p> </div>
        <div className='developer'>
          <p>Rudransh Khandelwal</p>
          <p>Hitesh Tahiliani</p>
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default Home
