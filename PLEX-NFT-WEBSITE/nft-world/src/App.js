import React from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollTop from "./components/ScrollTop";
import SignUp from "./components/SignUp";
import SuperRare from "./components/SuperRare";
import "./scss/index.scss";

export default function App(){
  return (
  <div className = "app-container">
    <ScrollTop/>
    <Navbar/>
    <Home/>
    <Free/>
    <Clients/>
    <SuperRare/>
    <Release/>
    <Like/>
    <SignUp/>
    <Footer/>    
  </div>);
}
