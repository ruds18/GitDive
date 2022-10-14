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

           <div>
            
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                </div>
                <div class="carousel-item">
                  <div className='content '>1</div>
                  {/* <img class="d-block w-100" src="..." alt="Second slide"> */}
                </div>
                <div class="carousel-item">
                  <div className='content '>2</div>
                  {/* <img class="d-block w-100" src="..." alt="Third slide"> */}
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
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
