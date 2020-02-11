import React from "react";
import logo from "../assets/img/logo.svg";
import "./App.scss";

const time = new Date();

const App = () => {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-sm-12"></div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>How bout I do </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
