import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}

//Class Component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

// Class Component
class SecondComponent extends Component {
  render() {
    return(
      <div className="secondComponent">
        SecondComponent
      </div>
    );
  }
}

//Functional Component
function ThirdComponent() {
    return(
      <div className="thirdComponent">
        ThirdComponent
      </div>
    );
}

//Finctonal Component 
function FourthComponent () {
  return(
    <div className="thirdComponent">
        FourthComponent
      </div>
  );
}

export default App;