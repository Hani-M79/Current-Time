import logo from "./time-management.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    CTD: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="TimeDate">
        <header className="header">
          <img src={logo} className="app-logo" alt="logo" />
          <br></br>
          <p>
            Current Time and Date : <br></br> <br></br> {this.state.CTD}
          </p>
        </header>
      </div>
    );
  }
}
export default App;
