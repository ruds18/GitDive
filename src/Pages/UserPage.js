import React from 'react'
import '../CSS/UserPage.css'
import logout from '../Assets/logout.png'
import info from '../Assets/Info.png'

function UserPage() {
  return (
    <div className='user-container'>
        <div className='left'>
            
           <h1 className="left_heading">GetRepo</h1>

           <div className='left_user-info'>
            <p>Welcome</p>
            <p>Rudransh</p>
            <img src={logout} />
           </div>
          
        </div>
        <div className='right'>
            <div className='right-search'>
    
            </div>
            <img src={info} alt="" />
        </div>
    </div>
  )
}

export default UserPage