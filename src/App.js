import logo from "./clock.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState();
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <br />
        <p>Current Time :</p>
        <p>{time}</p>
      </header>
    </div>
  );
}

export default App;
