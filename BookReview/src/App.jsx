import React from "react";
import { useState } from 'react';
import './App.css';
import "./index.css"


// React router 
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout.jsx";

// Pages
import Home from "./Components/Home/Home.jsx"
import About from "./Components/About/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
    </Route>
  )
)


function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
