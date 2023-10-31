// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import Services from "./components/Services";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import CompanyStats from "./components/CompanyStats";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Client />
      <Products />
      <CompanyStats />
      <ProductDetails />
      <Blog />
      <NewsLetter />
      <MyFooter />
    </>
  );
}

export default App;
