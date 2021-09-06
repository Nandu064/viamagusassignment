import React,{useState} from 'react';
import { Row, Col } from 'antd';
import Logo from '../../assets/top.svg'
import google from '../../assets/google.png'
import fb from '../../assets/fb.png'
import Error from '../../assets/error.png'

import './Login.css'

function Login() {
  const [emailErr, isEmailErr] = useState("");
  const [passErr, isPassErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () =>{
    console.log(email,password)
    if(email === ""){
      isEmailErr("active")
    }else{
      isEmailErr("")
    }
    if(password === ""){
      isPassErr("active")
    }else{
      isPassErr("")
    } 

  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div>
          <div  className="background__img">
          </div>
          <Col xs={{span:17,offset:4}} sm={{span:14,offset:5}} md={{span:11,offset:7}} lg={{span:10,offset:7}} xl={{span:7,offset:9}}>
            <div className="form__container">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="top">
                  <img alt="logo" className="logo" src={Logo} />        
                </div>
                <div className="inner_form_container">
                  <p className="form_title">Login</p> 
                  <div className="inner_bg"></div> 
                  <input className="form_input" name="email" type="email"  placeholder="Email" value={email} onChange={(e)=>handleEmail(e)} />
                  <span className={`err_msg ${emailErr}`}>
                    <img alt="errorImg" className="error_img" src={Error} />
                    <span className="error_text">The email field is required</span>
                  </span>
                  <input className="form_input" name="password" type="password"  placeholder="Password" value={password} onChange={(e)=>handlePassword(e)} />
                  <span  className={`err_msg ${passErr}`}>
                    <img alt="errorImg" className="error_img" src={Error} />
                    <span className="error_text">The password field is required</span>
                  </span>
                  
                  <button type="submit" className="signIn_btn" onClick={submitHandler}>Sign In</button>
                  <div className="forgot_container">
                    <p className="forgot_pass">Forgot Password?</p>
                    <p className="sign_up">New User?Sign Up</p>
                  </div>
                  <p className="or">or</p>
                  <div className="google_btn">
                    <img alt="googleLogo" src={google} className="google_btn_logo"></img>
                    <p className="google_btn_text">continue with google</p>
                  </div>
                  <div className="facebook_btn">
                    <img alt="FbLogo" src={fb} className="facebook_btn_logo"></img>
                    <p className="facebook_btn_text">continue with facebook</p>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </Col>
    </Row>
  )
}

export default Login
