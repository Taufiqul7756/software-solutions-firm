// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Client />
      <Products />
    </>
  );
}

export default App;
