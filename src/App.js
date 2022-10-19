// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import {auth,provider} from './firebase'
import {signInWithPopup} from 'firebase/auth';
import { useState } from 'react';
import UserPage from '../src/Pages/UserPage'

function App() {
  const [userName, setUserName ] = useState([]);
  const [userImage, setUserImage] = useState([]);

  //Firebase config
  const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
    setUserName(result.user.displayName);
    setUserImage(result.user.photoURL);
    
  })


  return (
    <div >
      <Router>
          <Routes>
            <Route path="/" element={<Home
            userName={userName}
            userImage={userImage}
             signInWithGoogle={signInWithGoogle} />} />
             
          </Routes>
          <Routes>
            <Route path="/search" element={<UserPage
            userName={userName}
            userImage={userImage}
             signInWithGoogle={signInWithGoogle} />} />
             
          </Routes>
        </Router>
    </div>
  );
}

export default App;
