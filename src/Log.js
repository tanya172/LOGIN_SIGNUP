import React, { useState } from "react";
import {Link,} from "react-router-dom"
import "./Login.css";


function Login() {



    
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>E.mail</label>
         
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="Password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="robot">
        <div class="g-recaptcha" data-sitekey="6LfeHEUeAAAAAFggr9lrzPCBRr7_S-CmbnpUXTB6" style={{
                paddingTop:"20px",
                    paddingBottom:"20px",
                    marginRight:"50px"
              
                    
                
             }}></div>
             </div>
        <div>
          <button className="button-container">Login</button>
        </div>
        <div>
          <button className="button-container2">Signup</button>
        </div>
       
       
    
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App/>
// , rootElement);



export default Login