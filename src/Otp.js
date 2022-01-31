import React from "react";
import { useNavigate } from "react-router-dom";
import "./Otp.css";

function Otp () {
    let navigate = useNavigate();
    
    return (<div>
    <div className="main">
        <section className="signup">
     <h2 className="o-title">OTP Verification</h2>
           <div> <p className="ocontent">Enter the OTP sent to <br /> registered E-Mail</p></div>
           
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",

               }}
               name="otp"
               maxLength="1"
           />
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",
               

               }}
               name="otp"
               maxLength="1"
           />
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",

               }}
               name="otp"
               maxLength="1"
           />
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",

               }}
               name="otp"
               maxLength="1"
           />
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",

               }}
               name="otp"
               maxLength="1"
           />
           <input
               className="otpField"
               type="text"
               style={{
                   width:"30px",
                margin:"5px",
                backgroundColor: "WindowFrame",

               }}
               name="otp"
               maxLength="1"
           />
           
           <p className="rotp">Send OTP?</p>

           <button className="btn" onClick={() => {
               navigate("/home");
           }}>
             <div className="content">  Verify & Proceed </div>
           </button>
          
    
    
</section>
</div>
</div>
    )
}
export default Otp