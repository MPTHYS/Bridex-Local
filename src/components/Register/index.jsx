import React, { useState } from 'react';
import logopopup from "asset/home-bridex/logo-popup.svg";
import google from "asset/home-bridex/google.svg";
import Field from 'components/Login/helper';

function Register() {
  const [form, setForm] = useState({})
  const[err, setErr] = useState({})
  const onSubmit = (ev)=> {
    ev.preventDefault();
    let objErr = {}
    if(!form.email) {
      objErr.email = 'Invalid email'
    }
    if(!form.password) {
      objErr.password = 'Password cannot be left blank'
    } else if(form.password.length < 6) {
      objErr.password = 'Minimum 6 characters'
    }
    setErr(objErr)
  }
  const register = (name)=> {
    return {
      err: err[name],
      value: form[name] || '',
      onChange:ev =>setForm({...form,[name]:ev.target.value})
    }
  }
    return (
        <div className="pupop-reg">
        <div className="pupop-title"><h1>Register</h1></div>
          <div className="pupop-main">
            <div className="pupop-main-logo">
              <img src={logopopup} alt="" />
            </div>
            <form onSubmit={onSubmit}>
            <div className="pupop-main-text"> <h4>Create your Bridex account</h4></div>
            <div className="pupop-main-input">
          <Field placeholder={'Email'} type='text'{...register('email')} />
          <Field placeholder={'Password'} type='text' {...register('password')} />
          <Field placeholder={'Referral'} type='text' {...register('ref')} />
              <div className="pupop-main-input-otp">
              <Field placeholder={'OTP Email'} type='number' {...register('otp')}/>
              <div className="pupop-main-input-btn">Send OTP</div>
              </div>
            </div>
            <div className="pupop-main-checkbox">
            <Field type='checkbox'/> 
              <div>You agree with <span>Terms of Service</span> and <span>Privacy Policy</span> by Real Football</div>
            </div>
            
            <button className='pupop-main-btn'>SIGN UP</button>
            </form>
            <div className="pupop-main-end">
              <div className="pupop-main-left">
                <span>Or Sign Up with</span>
                <img src={google} alt="" />
              </div>
              <div className="pupop-main-right">
                <p>Do you already have an account?</p>
                <strong>LOG IN NOW</strong>
              </div>
            </div>
          </div>
        
      </div>
    )
}

export default Register
