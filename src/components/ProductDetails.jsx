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
import productsNoTwo from "../assets/profile/testimonials.avif";

const ProductDetails = () => {
  return (
    <div>
      {/* About text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8"
        id="productsDetails"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-4 md:w-4/5 ">
              Your Premier IT Partner for Innovative Solutions-{" "}
              <span className="text-BrandPrimary">weStrike</span>
            </h2>
            <h3 className="text-xl text-NeutralD_Grey font-semibold mb-4 md:w-4/5">
              A highly office solution for your business
            </h3>
            <p className="md:w-3/4 text-NeutralGrey mb-8">
              weStrike is a dynamic software company with a proven track record
              of excellence. With over 500 projects successfully completed, we
              offer a wide range of services, including web development,
              cybersecurity, ERM/CRM solutions, AI/ML solutions, SEO expertise,
              and POS solutions. Our team of over 80 IT professionals
              collaborates with 5+ tech partners to provide cutting-edge,
              tailored solutions for your business. Trust weStrike to be your
              strategic IT partner for innovation and success.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>

        {/* second product details */}
        <div
          className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-NeutralSilver py-16"
          id="testimonial"
        >
          <div className=" flex flex-col md:flex-row justify-between items-center gap-8 ">
            <div className="md:w-1/3 ">
              <img src={productsNoTwo} alt="" />
            </div>
            {/* details Text */}
            <div className="md:w-2/3 mx-auto">
              <p className="md:w-4/5 text-sm text-NeutralGrey mb-8 leading-6 ">
                We've been working with weStrike for over a year now, and their
                expertise in web development and SEO has significantly improved
                our online presence. Their team is dedicated, professional, and
                always goes the extra mile to ensure our success. Thanks to
                weStrike, our business has seen substantial growth, and we
                couldn't be happier with the results.
              </p>
              <h4 className="text-BrandPrimary text-xl font-semibold mb-2  ">
                Sarah Johnson
              </h4>
              <p className="text-base text-NeutralGrey mb-8 ">
                CEO of Johnson's E-commerce Emporium
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
