// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import CompanyStats from "./components/CompanyStats";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Client />
      <Products />
      <CompanyStats />
      <About />
    </>
  );
}

export default App;
