import React from "react";

import "./Fpwd.css"

const Fpwd = () => {
    return (<>
        <div className="main">
        
        <section className="fpwd">
    <div className="container mt-5">
            
        
            <h2 className="p-title">Forgot Password</h2>
           <div> <p className="para"> Your password has <br />been sent to your <br />registered mobile no. <br /> +91XXXXXXXXXX.</p>

           <p className="content">Enter Email</p> 
           </div>
            
            <div className="pwd-group">
                <label htmlFor="name">
                <i class="zmdi zmdi-lock-outline"></i>

                </label>
             
            <input classname="email"
            type="email" name="email" id="email" placeholder="E.mail" autoComplete="off"></input>
            </div>

            <button
            className="btn" >
             <div className="content">  Redirect to <br /> Login Page </div>
           </button>
            

           
            </div>
            </section>
            
            </div>
     
        
    </>)
}

export default Fpwd;