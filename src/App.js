import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [Progress,setprogress] = useState(0);
  const [country,setcountry] = useState(localStorage.getItem("Country") == null? "in": localStorage.getItem("Country"));
  const [mode,setmode] = useState(localStorage.getItem("M") == null? "light": localStorage.getItem("M"))

  const SetProgress = (ProgressVal) => {
    setprogress(ProgressVal);
  }

  const ChangeCountry = (countryName) => {
    localStorage.setItem("Country",countryName);
    setcountry(countryName);
  }

  const ModeChange = () => {
    if (mode === "dark") {
      setmode("light");
      localStorage.setItem("M","light");
      document.body.style.backgroundColor = "white";
    }
    else {
      setmode("dark");
      localStorage.setItem("M","dark");
      document.body.style.backgroundColor = "#343a40";
    }
  }
  return (
    <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={Progress}
        />
        <Navbar mode={mode} toggle={ModeChange} CountryName={ChangeCountry} />
          <Routes>
            <Route exact path="/" element={<News progress={SetProgress} key={"general"} category="general" country={country} mode={mode} />} />
            <Route exact path="/business" element={<News progress={SetProgress} key={"business"}  category="business" country={country} mode={mode} />} />
            <Route exact path="/entertainment" element={<News progress={SetProgress} key={"entertainment"}  category="entertainment" country={country} mode={mode} />} />
            <Route exact path="/general" element={<News progress={SetProgress} key={"general"}  category="general" country={country} mode={mode} />} />
            <Route exact path="/health" element={<News progress={SetProgress} key={"health"}  category="health" country={country} mode={mode} />} />
            <Route exact path="/science" element={<News progress={SetProgress} key={"science"}  category="science" country={country} mode={mode} />} />
            <Route exact path="/sports" element={<News progress={SetProgress} key={"sports"}  category="sports" country={country} mode={mode} />} />
            <Route exact path="/technology" element={<News progress={SetProgress} key={"technology"}  category="technology" country={country} mode={mode} />} />
          </Routes>
        <Footer mode={mode}/>
      </Router>
    
  )
}

export default App;
