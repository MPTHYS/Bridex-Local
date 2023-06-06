import React, { useState } from "react";
import logopopup from "asset/home-bridex/logo-popup.svg";
import google from "asset/home-bridex/google.svg";
import Field from "./helper";
import { Validate } from "components/utils/validate";

function Login() {
  const [form, setForm] = useState({})
  const [err, setErr] = useState({})
  const onSubmit = (ev)=> {
    ev.preventDefault();
    const rules = {
      email:[{required: true , message: 'email ko dc bo trong', regexp:'email',messageRegexp:'kh dung dinh dang' }],
      password:[{required: true, message: 'password ko dc bo trong'}]
    }
    const objErr = Validate(rules, form)
    setErr(objErr)
    if(Object.keys(objErr).length == 0) {
      console.log('validate success');
    } else {
      console.log('validate fails');
    }
  }
  const login = (name)=> {
    return {
      err: err[name],
      value: form[name],
      onChange: ev =>setForm({...form,[name]:ev.target.value})
    }
  }
  return (
    <div className="btn-table">
      <div className="btn-table-main">
        <h2 className="btn-table-title">Sign in</h2>
        <div className="btn-table-logo">
          <img src={logopopup} alt="" />
        </div>  
        <form onSubmit={onSubmit}>
          <Field type="text" placeholder={'Email'} label={'Email'} required {...login('email')}/>
          <Field type="text" placeholder={'Password'} label={'Password'} required {...login('password')} />
          <button className="btn-table-btn">LOGIN</button>
        </form>
        <div className="btn-table-text">
          <div className="btn-table-forgot">
            <p>Forgot password?</p>
            <div>
              If you do not already have an account ? <strong>Sign up.</strong>
            </div>
          </div>
          <div className="btn-table-sign">
            <p>Or Sign In With</p>
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
