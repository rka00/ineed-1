import { ReactComponent as Username } from "./components/svg/Id.svg";
import { ReactComponent as Password } from "./components/svg/pw.svg";
import { ReactComponent as Name } from "./components/svg/ineed_name.svg";
import { ReactComponent as Next} from "./components/svg/next.svg";
import { ReactComponent as Login_with_others} from "./components/svg/loginwithothers.svg";
import { ReactComponent as GoogleLogin} from "./components/svg/google_login.svg";
import { useNavigate } from "react-router-dom";
import './Login.css';

import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from './components/main/firebase_config.js';
import { auth } from './components/main/firebase_config.js';
import React from 'react';
import { Link } from "react-router-dom";

import { useGoogleLogin } from '@react-oauth/google'

export default function Login() {




    


    const googleSocialLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {console.log(codeResponse); gotomain(); },
        flow: 'auth-code',
      })


    const movePage = useNavigate();


    function gotomain(){
        movePage('user/main');
        
    }

   

    return(
<div className="Login">
      <p>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
      </p>
    <Name />
    <p></p>


     <p><Username /></p>
     
     <p><Password /></p>
     <p><Next onClick={gotomain} /></p>
     <p><Login_with_others /></p>
     
     <GoogleLogin onClick={()=>googleSocialLogin()}/>
        
     


    



    </div> 
    );

}