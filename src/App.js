import React, { useState } from "react";
import ReactDOM from "react-dom";
import Signup from "./Signup"
import Otp from "./Otp"
import Login from "./Login";
import Fpwd from "./Fpwd"
import Home from "./Home"
import "./App.css"
// import Sup from "./Sup"
// import Log from "./Log"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App ()
{
  return(<>
  <Routes>
    <Route exact path="/" element = {<Login />} />
    <Route exact path="/home" element = {<Home />} />
    <Route exact path="/signup" element = {<Signup />} />
    <Route exact path="/otp" element = {<Otp />} />
    <Route exact path="/fpwd" element = {<Fpwd />} />
    {/* <Route exact path="/sup" element = {<Sup />} /> */}
    {/* <Route exact path="/log" element = {<Log />} /> */}

   
  </Routes>

  </>
  

  );
}




export default App;