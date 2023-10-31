import React from "react";
import { FaApple } from "react-icons/fa6";
import sepa from "../assets/icons/sepa.png";
import yolo from "../assets/icons/yolo.png";
// import notion from "../assets/icons/notion.svg";
import redux from "../assets/icons/redux.svg";
import random1 from "../assets/icons/random1.svg";
import random2 from "../assets/icons/random2.svg";
import ipsum from "../assets/icons/ipsum.png";
import uberEats from "../assets/icons/uberEats.svg";

const Client = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto ">
      <div className="text-center my-8 ">
        <h2 className=" text-4xl text-NeutralD_Grey font-semibold mb-2">
          {" "}
          OUR VALUABLE CLIENTS
        </h2>
        <p className="text-xl text-NeutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-28">
          <img src={ipsum} alt="" />
          <img src={sepa} alt="" />
          <img src={yolo} alt="" />
          <img src={uberEats} alt="" />
          <img src={redux} alt="" />
          <img src={random1} alt="" />
          <img src={random2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
