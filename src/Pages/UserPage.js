import React from 'react'
import '../CSS/UserPage.css'
import logout from '../Assets/logout.png'
import info from '../Assets/Info.png'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth , onAuthStateChanged,signOut } from 'firebase/auth'
import { useEffect } from 'react'
import Home from './Home'



function UserPage({ authorized  , setUser , user}) {
  const auth = getAuth();

  return (
    <div>
      {user ? <div className='user-container'>
        <div className='left'>
            
           <h1 className="left_heading">GetRepo</h1>

           <div className='left_user-info'>
            <p>Welcome</p>
            <p>{user.displayName}</p>
            <img onClick={()=> signOut(auth)} src={logout} />
           </div>
          
        </div>
        <div className='right'>
            <div className='right-search'>
    
            </div>
            <img src={info} alt="" />
        </div>
    </div> : <Home />}
    </div>
  )
}

export default UserPage