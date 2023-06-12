import React from "react";
import { useState } from 'react';
import './App.css';
import "./index.css"


// React router 
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout.jsx";

// Pages
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />}></Route>
      <Route path="About" element={<Navbar />}></Route>
    </Route>
  )
)


function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
