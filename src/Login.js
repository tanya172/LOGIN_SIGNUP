import React, { useState, useEffect}from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login(props){
  let navigate = useNavigate;

  const [user1,setdata]= useState(
    {
      email: '',
      password: ''
    }
  );
  const url = "http://registrationloginapi.herokuapp.com/api/users/login"
  const Login1 = (e) => {
    e.preventDefault();
    debugger;
    const user={
      email: user1.email,
      password: user1.password
    };
    axios.post(url, user)
    .then((res) =>{
      debugger;
      console.log(res.user);
      const serializedState = JSON.stringify(res.user.UserDetails);
      var a=localStorage.setItem('myData',serializedState);
      console.log("A:",a)
      const user2 = res.user.UserDetails;
      console.log(res.user.message);
      if(res.user.status == '200')
       this.props.history.push('/home')
       else
       alert('Invalid User');

       
    })
  };

  const onChange = (e) => {
    e.persist();
    debugger;
    setdata({...user1, [e.target.name]:
    e.target.value});
  }
  return(

    <div className="app">
              <div className="box">
    <div>
          <h1 className="">Login Page</h1>

          <div className="cheeze">
<form onSubmit={Login1} class="user5">
          <input type ="email" name="email" value={user1.email} onChange={onChange} id="email" placeholder="email" className="form-control" />
         
          <br/>
        <input type="password" name="password" value={user1.password} onChange={onChange} id="password" placeholder="password" className="form-control"/>

          <br/>

          <div className="robot">
        <div class="g-recaptcha" data-sitekey="6LfeHEUeAAAAAFggr9lrzPCBRr7_S-CmbnpUXTB6" style={{
                paddingTop:"20px",
                    paddingBottom:"20px",
                    marginRight:"50px"
              
                    
                
             }}></div>
             </div>

          <div className="press">
          <button className="press1"
          onClick={() => {
                 navigate("/home");
               }}
             >Login</button>

          <br/>
          <button className="press2"
          onClick={() => {
                 navigate("/signup");
               }}
             >Signup</button>

          </div>
          </form>

          </div>

    </div>

    </div>
      
    </div>
  )
}


export default Login