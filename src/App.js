import React from "react";
import Calculator from "./components/Calculator";
import Labels from "./components/labels/Labels";
import './App.css'

const App = () => (
  <div>
    <h1>Welcome to React</h1>
    <Labels>Test for Labels</Labels>
    <Calculator />
  </div>
);

export default App;
