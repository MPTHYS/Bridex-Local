import React from "react";
import { useState } from "react";

// for(let key in {})
// setState
// form[key]
// push
// incluces kiem tra phan tu


function Test() {

  //   const onChange = (event) => {

  //   };
  //  let arr = []
  // const hi = {
  //     name: 1
  // }
  // arr?.push(hi)p
  // let test = {}
  // test[''truong''] = 1
  //  console.log(arr);
  
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  //   ref: "",
  // });
  
  // const onChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setForm({ ...form, [name]: value });
  // };

  // const [err, setErr] = useState([]);
  // function validate() {
  //   let vio = [];
  //   for (let key in form) {
  //     if (!form[key]) {
  //       vio.push(key);
  //     }
  //   }
  //   setErr(vio);
  // }

  // function handleSubmit() {
  //   validate();
  // }
  

 
    const [form, setForm] = useState ({
      email:'',
      password:"",
      ref:"",
    })
    console.log(form['email']?.length);
    const onChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setForm ({...form,[name]:value})
    }
    console.log();
     const [err, setErr] = useState([])
     function validate (){
      let obj = []
      for (let key in form){
        if (!form[key]){
          obj.push(key)
        }
        else if (form[key].length < 10 ){
          obj.push(key)
        }
      }
      setErr(obj)
      return obj
     }
     function handleSubmit() {
      validate();
     }






  //
  // filter, find, indexOf, Array.keys, includes, Spread, Date, Boolean,
  // push
  //

  return (
    <>
   
    <div className="texts">
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChange}
        />
        {err.includes("email") && <p>Err</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div>
        <input type="text" placeholder="Ref" name="ref" onChange={onChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    {/* <div>
      {listDataBonus}
    </div> */}
    </>
  );
}

export default Test;
