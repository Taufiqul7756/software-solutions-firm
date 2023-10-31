import React from "react";
import aboutImg from "../assets/profile/profile.png";
// import sheraspaceTeam from "../assets/profile/sheraspaceTeam.png";
import sepa from "../assets/icons/sepa.png";
import yolo from "../assets/icons/yolo.png";
import redux from "../assets/icons/redux.svg";
import random1 from "../assets/icons/random1.svg";
import random2 from "../assets/icons/random2.svg";
import ipsum from "../assets/icons/ipsum.png";
import uberEats from "../assets/icons/uberEats.svg";
import productsNoTwo from "../assets/profile/tesla.png";

const ProductDetails = () => {
  return (
    <div>
      {/* About text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-4 md:w-4/5 ">
              INTELLIGENT BUSINESS OPERATOR SYSTEM-{" "}
              <span className="text-BrandPrimary">weMoney</span>
            </h2>
            <h3 className="text-xl text-NeutralD_Grey font-semibold mb-4 md:w-4/5">
              A highly office solution for your business
            </h3>
            <p className="md:w-3/4 text-NeutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>

        {/* second product details */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-NeutralSilver py-16">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-8 ">
            <div className="md:w-1/3 ">
              <img src={productsNoTwo} alt="" />
            </div>
            {/* details Text */}
            <div className="md:w-2/3 mx-auto">
              <p className="md:w-4/5 text-sm text-NeutralGrey mb-8 leading-6 ">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="text-BrandPrimary text-xl font-semibold mb-2  ">
                Tim Smith
              </h4>
              <p className="text-base text-NeutralGrey mb-8 ">
                British Dragon Boat Racing Association
              </p>

              <div>
                <div className="flex items-center gap-8 flex-wrap ">
                  <img src={ipsum} alt="" className="cursor-pointer" />
                  <img src={sepa} alt="" className="cursor-pointer" />
                  <img src={yolo} alt="" className="cursor-pointer" />
                  <img src={uberEats} alt="" className="cursor-pointer" />
                  <img src={redux} alt="" className="cursor-pointer" />
                  <img src={random1} alt="" className="cursor-pointer" />
                  <img src={random2} alt="" className="cursor-pointer" />

                  <div className="flex items-center gap- 8">
                    <a href="/">
                      {" "}
                      <span className="text-BrandPrimary text-xm font-bold hover:text-neutral-700">
                        Meet all customers
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
