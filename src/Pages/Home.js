import React, { useState } from 'react';
import "../CSS/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/Group 3.png';
import UserPage from './UserPage';
import { getAuth , onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'



function Home({signInWithGoogle}) {


  const [user,setUser] = useState();
  const auth  = getAuth();
  console.log(user)
 
   useEffect(()=>{
      // run single time
      onAuthStateChanged(auth , (user)=>{
        if(user){
          setUser(user)
        }else {
          setUser(null);
        }
      })
   }, [])


  return (
    <div>
      {user ? <UserPage user={user} setUser={setUser}/> : <div className='home-container'>

{/* Left Part */}
<div className='left-container'>
  <h1 className='logo'>GetRepo</h1>
  <div className='left-container_contents'>
    <p>Ease your searching Journey with us.</p>
    <p>GetRepo helps you to find your github repository at just the tip of your finger with various search filters.</p>
  </div>
  <div className='left-container_testimonial-container'>
     <div className='left-container_testimonial'>
       <div className='testinomial-user_info'>
        <div className='testinomial-user_info-image'>
          <img src={user} alt="" />
        </div>
       <p >Rudransh Khandelwal</p>
       </div>
       <div className='testinomial-content'>
        <p>GetRepo  was able to ease our searching experience with different profiles  , Hence were able to  meet the  deadline way early.</p>
       </div>
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
  Login securely , with world’s most safest authentication.
  </p>
  <div className='right-container_btn' onClick={signInWithGoogle}>
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
</div>}
    </div>
  // <p>{localStorage.getItem("name")}</p>

  )
}

export default Home
