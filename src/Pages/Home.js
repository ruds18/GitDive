import React from 'react';
import "../CSS/Home.css";
import GoogleLogo from "../Assets/icons8-google-48.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    
    <div >
       <div className='split left'>
        <div className='text-left'>
           <div className="title">Get Repo </div>
           <div className="tagline">Ease your searching Journey with us.</div>
           <p className="text1">GetRepos helps you to find your github repository at just the tip of your finger with various search filters.</p>
           <div className='content '></div>
 

           <div class="slidershow middle">

            <div class="slides">
              {/* <input type="radio" name="r" id="r1" checked> */}
              {/* <input type="radio" name="r" id="r2">
              <input type="radio" name="r" id="r3">
              <input type="radio" name="r" id="r4">
              <input type="radio" name="r" id="r5"> */}
              <div class="slide s1">
                {/* <img src="1.jpg" alt=""> */}
                <div className='content '><h1>hii</h1></div>
              </div>
              <div class="slide">
                {/* <img src="2.jpg" alt=""> */}
                <div style={{backgroundColor: "lightblue"}} className='content '></div>
              </div>
              <div class="slide">
              <div className='content '></div>
              </div>
              <div class="slide">
              <div className='content '></div>
              </div>
              <div class="slide">
              <div className='content '></div>
              </div>
            </div>

            <div class="navigation">
              <label for="r1" class="bar"></label>
              <label for="r2" class="bar"></label>
              <label for="r3" class="bar"></label>
              <label for="r4" class="bar"></label>
              <label for="r5" class="bar"></label>
            </div>
          </div>

        </div> 
          
      </div>

      <div className='split right'>
        <div className='login'>Login</div>
        <div className='loginText'>Login securely, with world's most safest authentication..</div>
        <div className="googleLoginTextBox"></div>
        <div className='googleLogin'>Continue with Google</div>
        <img className='logoGoogle' src={GoogleLogo} alt="Logo" />
        <div className="developed">Developed by</div>
        <div className='developer1'>Rudransh Khandelwal</div>
        <div className='developer2'>Hitesh Tahiliani</div>
      </div>
    </div>
  )
}

export default Home
