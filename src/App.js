
import Navbar from './componants/Navbar';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './componants/Home';
import About from './componants/About';
import  Alert  from './componants/Alert';
import { Login } from './componants/Login';
import { Signup } from './componants/Signup';
import { useState } from 'react';
// import style from './cssModules/LoginSignup.module.css'

function App() {
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <video className={style.background_vid} autoPlay loop muted ><source src='src\cssModules\clouds - Trim.mp4' type='video/mp4'/></video> */}
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home showalert={showalert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login showalert={showalert}/>} />
          <Route exact path="/signup" element={<Signup showalert={showalert}/>} />
        </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
