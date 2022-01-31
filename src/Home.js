
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import image from "./images/npic.png"




const Home = () => {
    return (<>

       <div className="home">

       <nav class = "nav">

       <ul>
           <li><a href="index.html" target="_blank"><img src={image} alt="" 
           style={{width:"40px",height:"45px"}}/></a></li>
           <li><a href="About.html" target="_blank">Home</a></li>
           <li><a href="">DashBoard</a></li>
           <li><Link to={'/'}>Logout</Link></li>

       </ul>
       </nav>
       <div className="three">
        <div className="home-content">
            
            <h2>
<div>Welcome To<br/></div>
            Home Page
            <div> Team CSI</div></h2>
        
            </div>
           
                </div>
                </div>
                
                
                </>
    )
}


                export default Home