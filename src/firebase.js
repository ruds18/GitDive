import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpiJCVRLIx2NhfUL-6swjY92X9f1WMav8",
    authDomain: "getrepo-65d40.firebaseapp.com",  //dont publish on git 
    projectId: "getrepo-65d40",
    storageBucket: "getrepo-65d40.appspot.com",
    messagingSenderId: "603981528266",
    appId: "1:603981528266:web:98726db52a0588c0350833",
    measurementId: "G-N0035HYK3P"
  };

  const app = initializeApp(firebaseConfig);
  export const auth  = getAuth(app);

  const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // console.log(result);
            const name = result.user.displayName;
            const email = result.user.email ;
            const profilePic = result.user.photoURL ;

            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("profilePic", profilePic)

        }).catch((error)=>{
            console.log(error);
        })
  };