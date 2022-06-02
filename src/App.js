
import './App.css';
// import About from './components/About';
import Alert from './components/Alert'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      a: message,
      b: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode('dark');   
        document.body.style.backgroundColor = '#343a40';
       showAlert('Dark mode has been activated', 'success')
    }
    else{
      setMode('light');   
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been activated', 'success')
      }
  }

  return (
    <>
  {/* <Router> */}
  <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text in details." mode={mode}/>}/> */}
          <TextForm showAlert={showAlert} heading="Enter your text in details." mode={mode}/>
  {/* </Routes> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
