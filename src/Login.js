import { ReactComponent as Username } from "./components/svg/Id.svg";
import { ReactComponent as Password } from "./components/svg/pw.svg";
import { ReactComponent as Name } from "./components/svg/ineed_name.svg";
import { ReactComponent as Next} from "./components/svg/next.svg";
import { ReactComponent as Login_with_others} from "./components/svg/loginwithothers.svg";
import { ReactComponent as GoogleLogin} from "./components/svg/google_login.svg";
import { useNavigate } from "react-router-dom";
import './Login.css';

import React, { useState } from 'react';

import { useGoogleLogin } from '@react-oauth/google'



export default function Login() {

const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    // 이후에 필요한 로그인 로직을 추가하세요.
  }


    const googleSocialLogin = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
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