import React from "react";
import { useState } from 'react';
import Navbar from "./Components/GrandNavbar/Navbar/Navbar.jsx";
import './App.css';
import "./index.css"
import GrandNavbar from "./Components/GrandNavbar/GrandNavbar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <GrandNavbar/>  </div>
  )
}

export default App
