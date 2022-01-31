import React ,{useState} from "react";
import "./Signup.css";
import Axios from "axios";
import {useNavigate } from "react-router-dom";


// import Recaptcha from "react-recaptcha";


function Signup()
  {
     
    
      let navigate = useNavigate();

    const url ="https://registrationloginapi.herokuapp.com/api/users/register"
    const [data, setData] = useState({
      name: "",
      rollno: "",
      branch: "",
      email: "",
      address: "",
      password: "",
      year: "",
      gen: "",
      phone: ""

    })
    
    function otp(e){
      
      e.preventDefault();
      Axios.post("https://registrationloginapi.herokuapp.com/api/users/otp-send",{
        email: data.email,
      })
      console.log(otp);
     
    }


    

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
        gen: data.gen,
        phone: data.phone

      })
      .then(res=>{
        console.log(res.data)
      })

    }
    // const history=useHistory();
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
      // history.push("/otp")

    }
  
    return (
      <div className="main">
         <section className="signup"> 
        
    <div className="container mt-5">
            <div className="signup-content">
            <div className="signup-form"></div>
            <h2 className="f-title">Sign up</h2>

                <div className="form-group">
                <input onChange={(e) => handle(e)} className = "fields" type="text" name="name" id="name" value={data.name} autoComplete="off"
                placeholder="Name"></input>
                


                </div>
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="text" name="rollno" id="rollno" value={data.rollno} autoComplete="off"
                placeholder="Roll no." ></input>
                </div>
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="text" name="branch" id="branch" value={data.branch} autoComplete="off"
                placeholder="Branch" ></input>
                </div>
               
               
               
                 {/* <div onChange={(e) => handle(e)} className="branch" value={data.branch}>
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
                  </div> */
                }
                
                
                
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" style={{
                  marginTop:"2px",
                  height:"25px",
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319)"
                  }} type="email" name="email" id="email" value={data.email} autoComplete="off"
                placeholder="E.mail"
                ></input>
                
                
                
                </div>
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="text" name="address" id="address" value={data.address} autoComplete="off"
                placeholder="Address" ></input>
                
                
                
                </div>
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="password" name="password" id="password" value={data.password} autoComplete="off"
                placeholder="Password"></input>
              </div>
                
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="year" name="year" id="year" value={data.year} autoComplete="off"
                placeholder="year" style={{
                  height:"1.5rem",width:"12.5rem"
                }}></input>
              </div>

                
                
                
                
                {/* <div className="form-group " >
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
                </div>*/}

                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" type="gen" name="gen" id="gen" value={data.gen} autoComplete="off"
                placeholder="Gender"
                style={{
                  height:"1.5rem",width:"12.5rem"
                }}></input>
              </div> 

              
              {  /* <div className="form-group"> 
                <p onChange={(e) => handle(e)} className="gen" value={data.gen} style={{
                  paddingTop:"20px",
                    paddingBottom:"2px",
                   }}>Gender</p>
                <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="fields" className="gender" /> Female */}
        
             
 
             
             <div class="g-recaptcha" data-sitekey="6LfeHEUeAAAAAFggr9lrzPCBRr7_S-CmbnpUXTB6" style={{
                paddingTop:"20px",
                    paddingBottom:"20px",
                    paddingLeft:"20px"
                
             }}></div>

</div>
                
                
                
                
                <div className="form-group">
                <input onChange={(e) => handle(e)} className="fields" style={{
                    paddingTop:"2px",
                    paddingBottom:"2px",
                    width:"200px",
                    borderRadius:"5px",
                    backgroundColor:"rgba(240, 231, 231, 0.319"
                      }}type="name" name="phone" id="phone" value={data.contactNo}autoComplete="off"
                placeholder="Contact no."></input>
                </div>
              
                
                
               <button className="ping"
              

               onClick={(e) => [useNavigate(), otp()]}
                 
               
             
     type="button" style={{
                  width:"150px",
                  cursor:"pointer"
                  
                }} value="Signup"onChange={signup}>
              Signup 
           </button>
           </div>

    
           
        
      
        
</section>
         </div>
    );
    
              }
            

 export default Signup
