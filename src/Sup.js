// import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Axios from "axios";


 function Sup() {
     const url = "registrationloginapi.herokuapp.com/api/users/login"
     const [data, setData] = useState({
        name: "",
        rollno: "",
        branch: "",
        email: "",
        address: "",
        password: "",
        year: "",
        gender: "",
        contactNo: ""
  
     })
     function signup(e){
        e.preventDefault();
        Axios.post(url,{
          name: data.name,
          rollno: data.rollno,
          branch: data.branch,
          email: data.email,
          address: data.address,
          password: data.password,
          year: data.year,
          gender: data.gender,
          contactNo: data.contactNo
  
        })
        .then(res=>{
            console.log(res.data)
          })
  
      }
     function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
        // history.push("/otp")
  
      }
  return (
      <div>
          <form>
          <div className="main">
        <section className="signup">
    <div className="container mt-5">
            <div className="signup-content">
            <div className="signup-form"></div>
            <h2 className="f-title">Sign up</h2>

                <div className="form-group">
                <input className = "fields" type="text" name="name"  onChange={(e) => handle(e)}  id="name" value={data.name} autoComplete="off"
                placeholder="Name"></input>
                


                </div>
                <div className="form-group">
                <input  className="fields" type="text" name="rollno" onChange={(e) => handle(e)} id="rollno" value={data.rollno} autoComplete="off"
                placeholder="Roll no." ></input>
                </div>
               
               
               
                <div onChange={(e) => handle(e)} className="branch" value={data.branch}>
                  <select style={{
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319)"
                  }}>
                    <option value="branch" style={{
                    backgroundColor:"rgba(240, 231, 231, 0.319)"
                  }}>Select Branch</option>
                    <option value="1st">CSE</option>
                    <option value="2nd">CSE(AIML)</option>
                    <option value="3rd">CSE(DS)</option>
                    <option value="4th">CS</option>
                    <option value="1st">CS & IT</option>
                    <option value="2nd">IT</option>
                    <option value="3rd">ECE</option>
                    <option value="4th">EEE</option>
                    <option value="3rd">ME</option>
                    <option value="4th">CIVIL</option>
                   
                  </select>
                  </div>
               
                
                
                
                <div className="form-group">
                <input  className="fields" style={{
                  marginTop:"25px",
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319)"
                  }} type="email" name="email" onChange={(e) => handle(e)} id="email" value={data.email} autoComplete="off"
                placeholder="E.mail" ></input>
                
                
                
                </div>
                <div className="form-group">
                <input className="fields" type="text" name="address"  onChange={(e) => handle(e)} id="address" value={data.address} autoComplete="off"
                placeholder="Address" ></input>
                
                
                
                </div>
                <div className="form-group">
                <input className="fields" type="password" name="password"  onChange={(e) => handle(e)} id="password" value={data.password} autoComplete="off"
                placeholder="Password"></input>
              </div>
                
                
                
                <div className="form-group " >
        <div onChange={(e) => handle(e)} className="Year" value={data.year}>
<select style={{
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    // paddingLeft:"25px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319)",
                    // marginLeft:"-30px"
                  }}>
                  <option value="year" style={{
                    backgroundColor:"rgba(240, 231, 231, 0.319)"
                  }}>Select Year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>

                
                
               
                </div>
                <div className="form-group">
                <p onChange={(e) => handle(e)} className="gender" value={data.gender} style={{
                  paddingTop:"20px",
                    paddingBottom:"2px",
                   }}>Gender</p>
                <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="fields" className="gender" /> Female
             
             
             <div class="g-recaptcha" data-sitekey="6LfeHEUeAAAAAFggr9lrzPCBRr7_S-CmbnpUXTB6" style={{
                paddingTop:"20px",
                    paddingBottom:"20px",
                    paddingLeft:"20px"
                
             }}></div>
                
                
                
                </div>
                <div className="form-group">
                <input className="fields" style={{
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319"
                      }}type="name" name="contactNo"  onChange={(e) => handle(e)} id="contactNo" value={data.contactNo}autoComplete="off"
                placeholder="Contact no."></input>
                </div>
              
                
                
                <button className="button" style={{
                  width:"150px",
                  cursor:"pointer"
                }}>
             <div className="content"> Signup </div>
           </button>
           </div>

          
            

            </div>
        </div>
        
</section>
         </div>
          </form>
      </div>
    
  );
}

export default Sup;
