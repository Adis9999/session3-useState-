import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ColorChange from "./components/ColorChange";
import OffOn from "./components/offOn";


const App = () => {
  return (
    <div>
      <Counter num={0} />
      <ColorChange color1="red" color2="purple" />
      <OffOn offText="OFF" onText="ON" />
    </div>
  );
};

export default App;
